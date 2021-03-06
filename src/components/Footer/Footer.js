import React from 'react';
import './Footer.css';

const date = new Date();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__header-container">
          <h3 className="footer__header">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h3>
        </div>

        <div className="footer__content-container">
          <p className="footer__date">© {date.getFullYear()}</p>

          <ul className="footer__links">
            <li className="footer__link-container">
              <a className="footer__link" href="https://praktikum.yandex.ru/">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link-container">
              <a className="footer__link" href="https://github.com/maiself0/movies-explorer-frontend">
                Github
              </a>
            </li>
            <li className="footer__link-container">
              <a className="footer__link" href="https://facebook.com">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
