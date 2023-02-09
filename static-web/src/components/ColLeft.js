import React from 'react';
import { BsWhatsapp, BsGeoAlt, BsFillEnvelopeFill } from 'react-icons/bs';
import { ProgressBar, Stack, Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { useLanguage } from '../context/Context';
import { languages } from '../context/Config';

export function ColLeft() {
  const { language } = useLanguage()

  return (
    <>
      <h2>{languages.skill[language]}</h2>
      <ListGroup>
        <ListGroup.Item style={{ border: '1px solid grey' }}>
          <p className='text-break personal-information'>Cloud: AWS</p>
          <ProgressBar variant='secondary' now={80} />
        </ListGroup.Item>
        <ListGroup.Item style={{ border: '1px solid grey' }}>
          <p className='text-break personal-information'>IaC: Terraform</p>
          <ProgressBar variant='secondary' now={80} />
        </ListGroup.Item>
        <ListGroup.Item style={{ border: '1px solid grey' }}>
          <p className='text-break personal-information'>Frontend: React</p>
          <ProgressBar variant='secondary' now={60} />
        </ListGroup.Item>
        <ListGroup.Item style={{ border: '1px solid grey' }}>
          <p className='text-break personal-information'>GitHub</p>
          <ProgressBar variant='secondary' now={60} />
        </ListGroup.Item>
        <ListGroup.Item style={{ border: '1px solid grey' }}>
          <p className='text-break personal-information'>Docker </p>
          <ProgressBar variant='secondary' now={70} />
        </ListGroup.Item>
      </ListGroup>
      <hr style={{ color: '#fff' }} />
      <h2>{languages.language[language]}</h2>
      <ListGroup>
        <ListGroup.Item style={{ border: '1px solid grey' }}>
          <p className='text-break personal-information'>{languages.spanish[language]}</p>
          <ProgressBar variant='secondary' now={100} />
        </ListGroup.Item>
        <ListGroup.Item style={{ border: '1px solid grey' }}>
          <p className='text-break personal-information'>{languages.english[language]}</p>
          <ProgressBar variant='secondary' now={50} />
        </ListGroup.Item>
      </ListGroup>
      <hr style={{ color: '#fff' }} />
      <h2>{languages.information[language]}</h2>
      <Stack gap={3} style={{ marginBottom: '10px' }}>
        <ButtonGroup vertical>
          <Button variant='light' style={{ border: '1px solid grey' }}>
            <a
              href='https://api.whatsapp.com/send?phone=+542477360154&text=Hi%20Rodrigo%20Aguirre'
              className='list-group-item list-group-item-action justify-content-between align-items-center'
              target='_blank'
              rel='noopener noreferrer'>
              <p className='text-break personal-information'>
                <BsWhatsapp style={{ color: 'green' }} /> +54 (2477) 360154
              </p>
            </a>
          </Button>
          <Button variant='light' style={{ border: '1px solid grey' }}>
            <a
              href='https://www.google.com/maps/place/Buenos+Aires,+CABA/@-34.6156624,-58.5035098,12z/data=!3m1!4b1!4m5!3m4!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!8m2!3d-34.6036844!4d-58.3815591'
              className='list-group-item list-group-item-action'
              target='_blank'
              rel='noopener noreferrer'>
              <p className='text-break personal-information'>
                <BsGeoAlt style={{ color: 'red' }} /> Buenos Aires, Argentina
              </p>
            </a>
          </Button>
          <Button variant='light' style={{ border: '1px solid grey' }}>
            <a
              href='mailto:aguirrerodrigo1@hotmail.com'
              className='list-group-item list-group-item-action'
              target='_blank'
              rel='noopener noreferrer'>
              <p className='text-break personal-information'>
                <BsFillEnvelopeFill /> aguirrerodrigo1@hotmail.com
              </p>
            </a>
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  )
}