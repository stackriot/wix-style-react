import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import SvgExclamation from '../svg/Exclamation.js';
import styles from './Input.scss';

class InputErrorSuffix extends React.Component {
  render() {
    return (
      <Tooltip
        dataHook="input-tooltip"
        disabled={this.props.errorMessage.length === 0}
        placement="top"
        moveBy={{x: 2, y: 0}}
        alignment="center"
        content={this.props.errorMessage}
        overlay=""
        theme="dark"
        >
        <div className={styles.exclamation}><SvgExclamation width={2} height={11}/></div>
      </Tooltip>
    );
  }
}

InputErrorSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  errorMessage: PropTypes.string.isRequired,
  focused: PropTypes.bool
};

export default InputErrorSuffix;
