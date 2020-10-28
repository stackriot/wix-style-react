import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './styles.st.css';

const Cell = ({ span, children, vertical }) => (
  <div
    style={{
      gridColumn: `span ${span}`,
    }}
    className={st(classes.root, { vertical })}
    children={children}
  />
);

Cell.displayName = 'Cell';

Cell.propTypes = {
  /** any node to be rendered inside */
  children: PropTypes.node,

  /** how many columns should this cell occupy. Can be any number from 1 to 12 inclusive */
  span: PropTypes.number,

  /** whether to align children vertically to the middle */
  vertical: PropTypes.bool,
};

Cell.defaultProps = {
  span: 12,
};

export default Cell;
