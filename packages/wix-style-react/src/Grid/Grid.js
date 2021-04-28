import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import deprecationLog from '../utils/deprecationLog';
import { Layout, Cell } from '../Layout';
import Box from '../Box';
import { st, classes } from './Grid.st.css';
import { mainContainerMaxWidthPx, mainContainerMinWidthPx } from './constants';

const containerProps = {
  /** hook for testing purposes */
  dataHook: PropTypes.string,
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  /** Applies min-height in order to fit to `<Page.Content/>`  */
  stretchVertically: PropTypes.bool,
};

const DEPRECATION_MESSAGE =
  'Grid is deprecated and will be removed in next major release, please use <Layout /> instead.';

const Container = ({ children, fluid, dataHook, className }) => {
  useEffect(() => {
    deprecationLog(DEPRECATION_MESSAGE);
  }, []);

  if (fluid) {
    return (
      <Layout gap={0} dataHook={dataHook} cols={1} className={className}>
        {children}
      </Layout>
    );
  }

  return (
    <Box
      dataHook={dataHook}
      minWidth={mainContainerMinWidthPx}
      maxWidth={mainContainerMaxWidthPx}
      display="block"
      className={className}
    >
      <Layout gap={0} cols={1}>
        {children}
      </Layout>
    </Box>
  );
};

Container.propTypes = containerProps;

const Columns = ({ children, stretchViewsVertically, dataHook, className }) => {
  useEffect(() => {
    deprecationLog(DEPRECATION_MESSAGE);
  }, []);

  return (
    <Cell dataHook={dataHook} className={st(classes.rowRoot, {}, className)}>
      <Layout
        gap={0}
        className={st(classes.rowLayout, { stretchViewsVertically })}
      >
        {children}
      </Layout>
    </Cell>
  );
};

const AutoAdjustedColumns = ({ children, dataHook }) => {
  useEffect(() => {
    deprecationLog(DEPRECATION_MESSAGE);
  }, []);

  const DEFAULT_MAX_SPAN = 12;
  const cols = Array.isArray(children)
    ? children.filter(child => Boolean(child))
    : [children];
  const spanSize = Math.floor(DEFAULT_MAX_SPAN / cols.length);

  return (
    <Cell dataHook={dataHook} className={classes.rowRoot}>
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

const Col = ({ span = 12, children, dataHook, className }) => {
  useEffect(() => {
    deprecationLog(DEPRECATION_MESSAGE);
  }, []);

  return (
    <Cell
      dataHook={dataHook}
      span={parseInt(span)}
      className={st(classes.columnRoot, {}, className)}
    >
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
