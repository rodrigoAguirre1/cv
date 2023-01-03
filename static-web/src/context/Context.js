import React, { useContext, useState } from 'react';

const LanguageContext = React.createContext()

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    if (language === 'es') {
      setLanguage('en')
    } else {
      setLanguage('es')
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

