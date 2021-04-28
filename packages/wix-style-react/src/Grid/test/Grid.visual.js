import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row, Col } from '..';
import Text from '../../Text';
import ExampleAutoAdjustedRow from '../docs/ExampleAutoAdjustedRow';
import ExampleTwoHalfWidthRows from '../docs/ExampleTwoHalfWidthRows';
import ExampleTwoHalfWidthRowsFluid from '../docs/ExampleTwoHalfWidthRowsFluid';
import ExampleFixedWidthGrid from '../docs/ExampleFixedWidthGrid';

const block = (
  <div
    style={{
      backgroundColor: '#eee',
      padding: '10px',
      margin: 'auto',
      border: '1px solid',
    }}
  >
    <Text>text</Text>
  </div>
);

function col(colProps) {
  return (
    <Col span={4} {...colProps}>
      {block}
      {block}
    </Col>
  );
}

function row(rowProps, colProps) {
  return (
    <Row {...rowProps}>
      {col(colProps)}
      {col(colProps)}
    </Row>
  );
}

const tests = [
  {
    it: '2 rows 2 cols',
  },
  {
    it: '2 rows 2 cols + stretchViewsVertically',
    rowProps: {
      stretchViewsVertically: true,
    },
  },
];

tests.forEach(test => {
  storiesOf('Grid', module).add(test.it, () => (
    <Container>
      {row(test.rowProps, test.colProps)}
      {row(test.rowProps, test.colProps)}
    </Container>
  ));
});

storiesOf('Grid', module).add('2 half width rows', () => (
  <ExampleTwoHalfWidthRows />
));

storiesOf('Grid', module).add('2 half width rows (fluid container)', () => (
  <ExampleTwoHalfWidthRowsFluid />
));

storiesOf('Grid', module).add('Fixed width grid', () => (
  <ExampleFixedWidthGrid />
));

storiesOf('Grid', module).add('Auto adjusted', () => (
  <ExampleAutoAdjustedRow />
));
