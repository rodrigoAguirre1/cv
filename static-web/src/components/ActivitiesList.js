import React from 'react';
import { Activities } from './Activities';
import { ListGroup } from 'react-bootstrap';
import { useLanguage } from '../context/Context';
import { languages } from '../context/Config';
import sky from '../cv-static/GOPR0079.JPG';
import drums from '../cv-static/bata.jpeg';
import fishing from '../cv-static/pesca.PNG';
import wake from '../cv-static/wake.jpeg';

export function ActivitiesList() {

  const { language } = useLanguage()

  return (
    <div>
      <hr style={{ color: '#000' }} />
      {['xxl'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={'xxl'}>
          <Activities
            position='left'
            img={sky}
            description='Foto esquiando con Maxi, Euge y mamá'
            activity='Ski'
            text={languages.desc1[language]}
          />
          <hr style={{ color: '#000' }} />
          <Activities
            position=''
            img={drums}
            description='Foto grabando bateria'
            activity={languages.drums[language]}
            text={languages.desc2[language]}
          />
        </ListGroup>
      ))}
      <hr style={{ color: '#000' }} />
      {['xxl'].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={'xxl'} style={{ marginBottom: '10px' }}  >
          <Activities
            position='left'
            img={fishing}
            description='Foto pescando'
            activity={languages.fishing[language]}
            text={languages.desc3[language]}
          />
          <hr style={{ color: '#000' }} />
          <Activities
            position=''
            img={wake}
            description='Foto haciendo wakeboard'
            activity='Wakeboard'
            text={languages.desc4[language]}
          />
        </ListGroup>
      ))}
    </div>
  )
}