import React from 'react';
import { Container, Navbar, Stack, ListGroup, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LanguageButton } from './LanguageButton';
import profileImage from '../cv-static/perfil1.JPG';
import GenericPdfDownloader from './GenericPdfDownloader';

export function NavBar() {
  return (
    <Container fluid>
      <Row>
        <Col sm={3} md={3} lg={3} xl={3}>
          <img
            src={profileImage}
            className='img-fluid roundedCircle mx-auto d-block perfil'
            alt='Foto de perfil'
          />
        </Col>
        <Col sm={9} md={9} lg={9} xl={9}>
          <Navbar bg='dark' fixed='top' className='navbar'>
            <Container fluid>
              <p className='nombre-navbar'>Rodrigo Aguirre</p>
              <Stack direction='horizontal' gap={2}>
                <div className='vr bg-light' />
                <div>
                  <ListGroup variant='flush'>
                    <ListGroup.Item id='list'>
                      <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'is-active' : 'no-active'}
                      >Home
                      </NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item id='list'>
                      <NavLink
                        to='/AboutMe'
                        className={({ isActive }) => isActive ? 'is-active' : 'no-active'}
                      >About me
                      </NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item id='list'>
                      <LanguageButton />

                      <GenericPdfDownloader
                        downloadFileName='CV Rodrigo Aguirre'
                        rootElementId="HomePDF"
                      />

                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Stack>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}