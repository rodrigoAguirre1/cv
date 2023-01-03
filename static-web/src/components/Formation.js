import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';

export function Formation(props) {
  return (
    <ListGroup.Item action href={props.url} target='_blank' rel='noopener noreferrer'>
      <Container fluid>
        <Row>
          <Col sm={3} md={2} lg={2} xl={2} style={{ alignSelf: 'center' }}>
            <img
              className='mx-auto d-block'
              src={props.logo}
              alt={props.description}
              style={{ width: '90px' }}
            />
          </Col>
          <Col sm={9} md={10} lg={10} xl={10}>
            <div className='d-flex w-100 justify-content-between'>
              <h3 className='mb-1' id='solutions'>{props.company}</h3>
              <p className='text-muted'>{props.year}</p>
            </div>
            <p className='mb-1' id='certificado'>{props.description}</p>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}
