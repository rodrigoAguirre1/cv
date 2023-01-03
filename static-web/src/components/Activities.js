import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

export function Activities(props) {

  if (props.position === 'left') {
    return (
      <>
        <ListGroup.Item className='col-md-border'>
          <Container>
            <img
              src={props.img}
              className='img-thumbnail rounded act'
              alt={props.description}
              style={{ float: 'left' }}
            />
            <p className='justificar'><strong>{props.activity}</strong>: {props.text}</p>
          </Container>
        </ListGroup.Item>
      </>
    )
  } else {
    return (
      <>
        <ListGroup.Item className='col-md-border'>
          <Container>
            <img
              src={props.img}
              className='img-thumbnail rounded act'
              alt={props.description}
              style={{ float: 'right' }}
            />
            <p className='justificar'><strong>{props.activity}</strong>: {props.text}</p>
          </Container>
        </ListGroup.Item>
      </>
    )
  }
}