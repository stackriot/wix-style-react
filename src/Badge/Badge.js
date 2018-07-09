import React from 'react';
import classnames from 'classnames';
import {node, oneOf, string} from 'prop-types';

import typography, {convertFromUxLangToCss} from '../Typography';
import styles from './Badge.scss';

/**
  * General purpose badge component to indicate important (or not so) things
  */
const Badge = ({children, type, appearance, alignment, dataHook}) => {
  const className = classnames(
    styles.badge,
    styles[type],
    styles[alignment],
    typography[convertFromUxLangToCss(appearance)
  ]);

  return (
    <span className={className} data-hook={dataHook}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  /** node to render into badge */
  children: node.isRequired,

  /** define purpose of a badge, different color for each type */
  type: oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']).isRequired,

  /** set `vertical-align` */
  alignment: oneOf(['top', 'bottom', 'middle']).isRequired,

  /** choose appearance of typography. For Typography examples see storybook **Common** -> **Typography** */
  appearance: oneOf([
    'H0', 'H1', 'H2', 'H2.1', 'H3', 'H4',
    'T1', 'T1.1', 'T1.2', 'T1.3', 'T1.4',
    'T2', 'T2.1', 'T2.2', 'T2.3',
    'T3', 'T3.1', 'T3.2', 'T3.3', 'T3.4',
    'T4', 'T4.1', 'T4.2', 'T4.3',
    'T5', 'T5.1'
  ]).isRequired,

  /** set one to find component in testing environment */
  dataHook: string
};

Badge.defaultProps = {
  type: 'default',
  appearance: 'H4',
  alignment: 'middle'
};

Badge.displayName = 'Badge';

export default Badge;
