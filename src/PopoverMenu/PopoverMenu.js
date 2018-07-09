import React from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import styles from './PopoverMenu.scss';
import Tooltip from '../Tooltip';
import Button from '../Backoffice/Button';
import Dots from '../Icons/dist/components/Dots';
import PopoverMenuItem from '../PopoverMenuItem';
import classnames from 'classnames';

class PopoverMenu extends WixComponent {
  static propTypes = {
    size: Tooltip.propTypes.size,
    placement: Tooltip.propTypes.placement,
    buttonTheme: Button.propTypes.theme,
    buttonHeight: Button.propTypes.height,
    maxWidth: Tooltip.propTypes.maxWidth
  };

  static defaultProps = {
    size: 'normal',
    placement: 'top',
    buttonTheme: 'icon-greybackground',
    buttonHeight: 'medium',
    maxWidth: '378px'
  };

  placements = {
    top: styles.topPlacement,
    right: styles.rightPlacement,
    bottom: styles.bottomPlacement,
    left: styles.leftPlacement
  };

  placementStyle = placement =>
    this.placements[placement] || styles.topPlacement

  menuItems = items =>
    React.Children.map(items, (item, i) => {
      if (!item) {
        return null;
      }

      return (
        <PopoverMenuItem
          {...item.props}
          size={this.props.size}
          key={i}
          onClick={() => {
            this.tooltip.hide();
            item.props.onClick();
          }}
          />
      );
    });

  menu = () =>
    <ul
      className={classnames(
        styles.menu,
        {
          [styles.large]: this.props.size === 'large',
          [styles.placementTop]: this.props.placement === 'top',
          [styles.placementBottom]: this.props.placement === 'bottom'
        }
        )}
      >
      {this.menuItems(this.props.children)}
    </ul>

  render() {
    const {
      placement,
      size,
      maxWidth,
      buttonHeight,
      buttonTheme
    } = this.props;

    return (
      <Tooltip
        ref={tooltip => this.tooltip = tooltip}
        placement={placement}
        alignment="center"
        content={this.menu()}
        showTrigger="click"
        hideTrigger="click"
        showDelay={0}
        hideDelay={0}
        theme="light"
        size={size}
        padding={0}
        maxWidth={maxWidth}
        shouldCloseOnClickOutside
        >
        <Button
          type="button"
          height={buttonHeight}
          theme={buttonTheme}
          >
          <Dots size="12px"/>
        </Button>
      </Tooltip>
    );
  }
}

export default PopoverMenu;
