import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';

export function PersonalProjects(props) {
  return (
    <ListGroup.Item action href={props.url} target='_blank' rel='noopener noreferrer'>
      <Container fluid>
        <Row>
          <Col>
            <div className='d-flex w-100 justify-content-between'>
              <h3 className='mb-1' id='solutions'>{props.projectname}</h3>

              <p className='text-muted'>{props.projectdate}</p>
            </div>
            <h4>{props.projectinfo}</h4>
            <p className='mb-1' id='certificado'>{props.projectdescription}</p>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}