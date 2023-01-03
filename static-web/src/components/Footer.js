import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

export function Footer() {
  return (
    <footer className='bg-dark text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            href='https://www.linkedin.com/in/rodrigo-aguirre-7ba413224/'
            target='_blank'
            rel='noopener noreferrer'>
            <BsLinkedin
              style={{ color: 'white', marginRight: '20px', marginLeft: '20px' }}
              size='35'
            />
          </a>
          <a
            href='https://github.com/rodrigoAguirre1'
            target='_blank'
            rel='noopener noreferrer'>
            <BsGithub
              style={{ color: 'white', marginRight: '20px' }}
              size='35'
            />
          </a>
          <a
            href='https://www.instagram.com/rodri.viru/'
            target='_blank'
            rel='noopener noreferrer'>
            <BsInstagram
              style={{ color: 'white', marginRight: '20px' }}
              size='35'
            />
          </a>
          <a
            href='https://www.facebook.com/rodri.viru/'
            target='_blank'
            rel='noopener noreferrer'>
            <BsFacebook
              style={{ color: 'white', marginRight: '20px' }}
              size='35'
            />
          </a>
        </section>
      </div>
      <div className='text-center p-0 pb-2' style={{ backgroundColor: 'dark', minHeight: '200px' }} />
    </footer>
  );
}