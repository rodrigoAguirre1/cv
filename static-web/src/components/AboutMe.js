import { useLanguage } from '../context/Context';
import { languages } from '../context/Config';
import portada from '../cv-static/GOPR0109.JPG';

export function AboutMe() {

  const { language } = useLanguage()

  return (
    <>
      <img
        className='img-fluid portada'
        src={portada}
        alt='Foto en cerro catedral'
      />
      <h1 style={{ justifyContent: 'flex-start' }}>
        {languages.aboutme[language]}
      </h1>
      <p className='justificar'>
        {languages.about1[language]}
      </p>
      <p className='justificar'>
        {languages.about2[language]}
      </p>
    </>
  )
}