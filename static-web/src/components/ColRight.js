import React from 'react';
import { useLanguage } from '../context/Context';
import { languages } from '../context/Config';
import { Formation } from './Formation';
import { ListGroup } from 'react-bootstrap';
import aws from '../cv-static/aws-certified-solutions-architect-associate.png';
import terra from '../cv-static/hashicorp-certified-terraform-associate-002.png';
import untref from '../cv-static/Untref_logo.png';

export function ColRight() {

  const { language } = useLanguage()

  return (
    <>
      <h1>{languages.profile[language]}</h1>
      <p className='justificar'>{languages.p1[language]}</p>
      <p className='justificar'>{languages.p2[language]}</p>
      <p className='justificar'>{languages.p3[language]}</p>
      <p className='justificar'>{languages.p4[language]}</p>
      <p className='justificar'>
        {languages.p5[language]}
        <a
          href='https://www.linkedin.com/in/MaximilianoAguirre/'
          target='_blank'
          rel='noopener noreferrer'>Maximiliano Aguirre
        </a>
      </p>
      <hr style={{ color: '#000' }} />
      <h1>{languages.certificates[language]}</h1>
      <ListGroup variant='flush' style={{ marginBottom: '10px' }}>
        <Formation
          company='AWS: Solutions Architect'
          year='2022'
          description={languages.description1[language]}
          logo={aws}
          url='https://www.credly.com/badges/9619f83a-59bd-44ea-8ab0-8cf1aab18e61/public_url'
        />
        <Formation
          company='Hashicorp: Terraform Associate'
          year='2022'
          description={languages.description2[language]}
          logo={terra}
          url='https://www.credly.com/badges/14d55f9e-0fad-4169-b491-3cb38d3ffdff/public_url'
        />
      </ListGroup>
      <hr style={{ color: 'rgb(130,130,130)' }} />
      <h1>{languages.formation[language]}</h1>
      <ListGroup variant='flush' style={{ marginBottom: '10px' }}>
        <Formation
          company={languages.company3[language]}
          year='2015-2022'
          description={languages.description3[language]}
          logo={untref}
          url='https://aguirre38316.wixsite.com/rodrigo-aguirre'
        />
      </ListGroup>
    </>
  )
}