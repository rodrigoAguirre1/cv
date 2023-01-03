import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ColLeft } from '../components/ColLeft';
import { ColRight } from '../components/ColRight';

export function Root() {
  return (
    <Container fluid className='first-container'>
      <Row>
        <Col className='left-col' sm={12} md={4} lg={4} xl={4}>
          <ColLeft />
        </Col>
        <Col className='right-col' sm={12} md={8} lg={8} xl={8}>
          <ColRight />
        </Col>
      </Row>
    </Container>
  );
}