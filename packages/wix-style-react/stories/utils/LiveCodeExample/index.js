import React from 'react';
import PropTypes from 'prop-types';
import LiveCodeExample from 'wix-storybook-utils/LiveCodeExample';

import playgroundComponents from '../../../.storybook/playground';
import styles from './styles.scss';

/**
 * A utility function to convert a props object to an array of props strings.
 * Example usage:
 *
 *  const myComponentString = props => `
 *    <div
 *      ${createPropsArray(props).join('\n    ')}
 *    />
 *  `;
 *
 *  myComponentString({ id: 'some-id', style: { padding: 5 }})
 *  // Will return:
 *  //  `<div
 *  //    id="some-id"
 *  //    style={{ padding: 5 }}
 *  //  />`
 */
export const createPropsArray = props =>
  Object.entries(props).map(([key, value]) => {
    if (value === true) {
      return key;
    } else if (typeof value === 'string') {
      return `${key}="${value}"`;
    }

    return `${key}={${JSON.stringify(value)}}`;
  });

const Component = props => {
  const { scope, title, ...rest } = props;

  // Remove `eslint-disable` comments
  const filteredCode = props.initialCode.replace(
    /^(\s)*\/\*(\s)*eslint-disable(\s)*\*\/(\s)*$/gm,
    '',
  );

  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}

      <LiveCodeExample
        scope={{ ...playgroundComponents, ...scope }}
        {...rest}
        initialCode={filteredCode}
      />
    </div>
  );
};

Component.propTypes = {
  ...LiveCodeExample.propTypes,
  title: PropTypes.string,
};

export default Component;
