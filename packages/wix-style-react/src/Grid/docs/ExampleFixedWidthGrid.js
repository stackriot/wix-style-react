import React from 'react';

import { Container, Box, Row, Col } from 'wix-style-react';

export default () => (
  <Box max-width="200px">
    <Container fluid>
      <Row>
        <Col span={6}>
          <Box backgroundColor="red" width="100px" height="50px" />
        </Col>
        <Col span={6}>
          <Box backgroundColor="red" width="100px" height="50px" />
        </Col>
      </Row>
    </Container>
  </Box>
);
