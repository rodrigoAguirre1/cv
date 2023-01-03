import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ActivitiesList } from '../components/ActivitiesList';
import { AboutMe } from '../components/AboutMe';

export function FreeTime() {
  return (
    <Container fluid className='first-container'>
      <Row>
        <Col sm={12} md={12} lg={1} xl={2} style={{ backgroundColor: 'rgb(70, 70, 70)' }}></Col>
        <Col sm={12} md={12} lg={10} xl={8} style={{ backgroundColor: '#fff' }}>
          <AboutMe />
          <ActivitiesList />
        </Col>
        <Col sm={12} md={12} lg={1} xl={2} style={{ backgroundColor: 'rgb(70, 70, 70)' }}></Col>
      </Row>
    </Container>
  );
}