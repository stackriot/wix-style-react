import React from 'react';

import { Container, Row, Col, Card, Box } from 'wix-style-react';

export default () => (
  <Container>
    <Row>
      <Col span={6}>
        <Card showShadow>
          <Card.Header title="Card Title" />
          <Card.Content>
            <Box height="100px" />
          </Card.Content>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col span={6}>
        <Card showShadow>
          <Card.Header title="Card Title" />
          <Card.Content>
            <Box height="100px" />
          </Card.Content>
        </Card>
      </Col>
    </Row>
  </Container>
);
