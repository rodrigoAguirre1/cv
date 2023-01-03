import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLanguage } from '../context/Context';
import { languages } from '../context/Config';

export function LanguageButton() {

  const { language, toggleLanguage } = useLanguage()

  return (
    <div className='d-grid gap-2' >
      <Button
        className='leng-button'
        variant='secondary'
        size='sm'
        onClick={toggleLanguage}
      >
        {languages.button[language]}
      </Button>
    </div>
  );
}