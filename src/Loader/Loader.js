import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../BaseComponents/WixComponent';
import Arc from './Arc';
import css from './Loader.scss';
import Text from '../Text/Text';

const arcsAngles = {
  small: {
    light: 216,
    dark: 144
  },
  medium: {
    light: 108,
    dark: 108
  },
  large: {
    light: 180,
    dark: 180
  }
};
const strokeWidth = 4;
const sizesInPx = {
  small: 30,
  medium: 54,
  large: 102
};

export default class Loader extends WixComponent {

  static displayName = 'Loader';

  static propTypes = {
    /** The size of the loader */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

    /** The color of the loader */
    color: PropTypes.oneOf(['blue', 'white']),

    /** Text to be shown below the loader */
    text: PropTypes.string
  };

  static defaultProps = {
    size: 'medium',
    color: 'blue'
  };

  render() {
    const {size, color, text} = this.props;
    const sizeInPx = sizesInPx[size];
    const lightArcAngle = arcsAngles[size].light;
    const darkArcAngle = arcsAngles[size].dark;

    return (
      <div className={classNames(css.loaderContainer, css[size], css[color])}>
        <div className={css.arcsContainer}>
          <div className={css.lightArcContainer}>
            <Arc
              angle={lightArcAngle}
              className={css.lightArc}
              strokeWidth={strokeWidth}
              viewBoxSize={sizeInPx}
              />
          </div>
          <Arc
            angle={darkArcAngle}
            className={css.darkArc}
            strokeWidth={strokeWidth}
            viewBoxSize={sizeInPx}
            />
        </div>
        {
          text &&
          <div className={css.text}>
            <Text appearance="T5" dataHook="loader-text">{this.props.text}</Text>
          </div>
        }
      </div>
    );
  }
}
