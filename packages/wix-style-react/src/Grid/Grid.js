import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import deprecationLog from '../utils/deprecationLog';
import { Layout, Cell } from '../Layout';
import Box from '../Box';
import { st, classes } from './Grid.st.css';
import { mainContainerMaxWidthPx, mainContainerMinWidthPx } from './constants';

const containerProps = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  /** Applies min-height in order to fit to `<Page.Content/>`  */
  stretchVertically: PropTypes.bool,
};

const DEPRECATION_MESSAGE =
  'Grid is deprecated and will be removed in next major release, please use <Layout /> instead.';

const Container = ({ children, fluid }) => {
  useEffect(() => {
    deprecationLog(DEPRECATION_MESSAGE);
  }, []);

  if (fluid) {
    return <Layout gap={0}>{children}</Layout>;
  }

  return (
    <Box
      minWidth={mainContainerMinWidthPx}
      maxWidth={mainContainerMaxWidthPx}
      display="block"
    >
      <Layout gap={0}>{children}</Layout>
    </Box>
  );
};

Container.propTypes = containerProps;

const Columns = ({ children, stretchViewsVertically }) => {
  useEffect(() => {
    deprecationLog(DEPRECATION_MESSAGE);
  }, []);

  return (
    <Cell className={classes.rowRoot}>
      <Layout
        gap={0}
        className={st(classes.rowLayout, { stretchViewsVertically })}
      >
        {children}
      </Layout>
    </Cell>
  );
};

const AutoAdjustedColumns = ({ children }) => {
  useEffect(() => {
    deprecationLog(DEPRECATION_MESSAGE);
  }, []);

  const DEFAULT_MAX_SPAN = 12;
  const cols = Array.isArray(children)
    ? children.filter(child => Boolean(child))
    : [children];
  const spanSize = Math.floor(DEFAULT_MAX_SPAN / cols.length);

  return (
    <Cell className={classes.rowRoot}>
      <Layout gap={0} className={classes.rowLayout}>
        {cols.map((col, index) => (
          <Cell span={spanSize} key={index} className={classes.columnRoot}>
            {col}
          </Cell>
        ))}
      </Layout>
    </Cell>
  );
};

const Col = ({ span = 12, children }) => {
  useEffect(() => {
    deprecationLog(DEPRECATION_MESSAGE);
  }, []);

  return (
    <Cell span={parseInt(span)} className={classes.columnRoot}>
      {children}
    </Cell>
  );
};

export {
  Container,
  Container as RawContainer,
  Columns as Row,
  Columns,
  AutoAdjustedColumns,
  AutoAdjustedColumns as AutoAdjustedRow,
  Col,
};
