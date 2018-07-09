import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import classnames from 'classnames';
import styles from './Modal.scss';
import {colors, flexPositions, positions} from './ModalConstants';
import WixComponent from '../BaseComponents/WixComponent';

class Modal extends WixComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    contentLabel: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(Object.keys(colors)),
    children: PropTypes.any,
    zIndex: PropTypes.number,
    shouldCloseOnOverlayClick: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
    horizontalPosition: PropTypes.oneOf(Object.keys(flexPositions)),
    verticalPosition: PropTypes.oneOf(Object.keys(flexPositions)),
    closeTimeoutMS: PropTypes.number,
    scrollable: PropTypes.bool,
    scrollableContent: PropTypes.bool,
    maxHeight: PropTypes.string,
    height: PropTypes.string,
    overlayPosition: PropTypes.oneOf(Object.keys(positions)),
    parentSelector: PropTypes.func
  };

  static defaultProps = {
    onOk: () => {
    },
    borderRadius: 0,
    theme: colors.blue,
    shouldCloseOnOverlayClick: false,
    horizontalPosition: 'center',
    verticalPosition: 'center',
    closeTimeoutMS: 500,
    scrollable: true,
    scrollableContent: false,
    height: 'auto',
    maxHeight: 'auto',
    overlayPosition: 'fixed'
  };

  render() {
    const {
      horizontalPosition,
      verticalPosition,
      height,
      scrollableContent,
      borderRadius,
      zIndex,
      scrollable,
      theme,
      isOpen,
      shouldCloseOnOverlayClick,
      onRequestClose,
      onAfterOpen,
      contentLabel,
      closeTimeoutMS,
      children,
      appElement,
      overlayPosition,
      parentSelector
    } = this.props;
    let {maxHeight} = this.props;
    const justifyContent = flexPositions[horizontalPosition];
    const alignItems = flexPositions[verticalPosition];

    maxHeight = scrollableContent && maxHeight === 'auto' ? '100vh' : maxHeight;

    const modalStyles = {
      overlay: {
        // Overriding defaults
        position: overlayPosition,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 11 + (zIndex || 0),
        backgroundColor: null, // null disables the property, use css instead
        // Overriding defaults - END
        display: 'flex',
        justifyContent,
        alignItems,
        overflowY: scrollable ? 'auto' : 'hidden'
      },
      content: {
        // Overriding defaults
        border: 'none',
        overflowY: scrollableContent ? 'auto' : 'initial',
        overflowX: scrollableContent ? 'hidden' : 'initial',
        height,
        maxHeight,
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        borderRadius,
        padding: '0px',
        boxShadow: '0 0 14px 0 rgba(22, 45, 60, 0.3)',
        // Overriding defaults - END
        backgroundColor: 'transparent',
        marginBottom: '0px',
        position: 'relative'
      }
    };

    const modalClasses = `${styles.modal} ${styles[theme]}`;
    const portalClassName = classnames(styles.portal, {
      [styles.portalNonScrollable]: !scrollable
    });

    if (appElement) {
      ReactModal.setAppElement(appElement);
    } else {
      ReactModal.setAppElement('body');
    }

    return (
      <ReactModal
        portalClassName={portalClassName}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        onRequestClose={onRequestClose}
        onAfterOpen={onAfterOpen}
        style={modalStyles}
        className={modalClasses}
        contentLabel={contentLabel}
        closeTimeoutMS={closeTimeoutMS}
        parentSelector={parentSelector}
        >
        {children}
      </ReactModal>
    );
  }
}

export default Modal;
