import React from 'react';
import { useLanguage } from '../context/Context';
import { languages } from '../context/Config';
import { Formation } from './Formation';
import { PersonalProjects } from './PersonalProjects';
import { ListGroup } from 'react-bootstrap';

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
      <h1>{languages.projects[language]}</h1>
      <ListGroup variant='flush' style={{ marginBottom: '10px' }}>
        <PersonalProjects
          projectname='DevOps Challenge: AWS, Docker, CI/CD'
          projectdate={languages.date1[language]}
          projectinfo={languages.projectinfo1[language]}
          projectdescription={languages.projectdescription1[language]}
          url='https://github.com/rodrigoAguirre1/devops-challenge'
        />
        <PersonalProjects
          projectname='Rick and Morty Web'
          projectdate={languages.date2[language]}
          projectinfo={languages.projectinfo2[language]}
          projectdescription={languages.projectdescription2[language]}
          url='https://github.com/rodrigoAguirre1/rick-and-morty-chars'
        />
        <PersonalProjects
          projectname='CV website'
          projectdate={languages.date3[language]}
          projectinfo={languages.projectinfo3[language]}
          projectdescription={languages.projectdescription3[language]}
          url='https://github.com/rodrigoAguirre1/cv'
        />  
      </ListGroup>
      <hr style={{ color: '#000' }} />
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