import React, { Suspense } from 'react';

import myLogo from '../assets/img/My_logo.png';
import upIcon from '../assets/svg/up.svg';

const YandexCard = React.lazy(() => import('../components/YandexCard'));

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer">
            <div className="container">
                <p className="footer__info">Мы всегда доступны для вас</p>
                <h2>Контакты</h2>
                <ul className="footer__contacts">
                    <li className="footer__tel">
                        <p>Телефон</p>
                        <span>+7 495 123 45 67</span>
                    </li>
                    <li className="footer__address">
                        <p>Адрес</p>
                        <span>
                            109382, Москва, пр. Егорьевский, д.2а, стр.10
                            въезд на машине только с улицы Люблинская
                        </span>
                    </li>
                    <li className="footer__mail">
                        <p>Почта</p>
                        <span>Info@test.ru</span>
                    </li>
                </ul>
                <div className="footer__dev">
                    <span>Разработка приложения:</span>
                    <a href="https://github.com/Dmitriev-Nikolay" target="_blank" rel="noreferrer">
                        <img width="40" height="40" src={ myLogo } alt="My logo"/>
                    </a>
                </div>
                <div className="footer__up" onClick={ scrollToTop }>
                    <p>вверх</p>
                    <img src={ upIcon } alt="up" width="60" height="60"/>
                    <p>вверх</p>
                </div>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <YandexCard />
                </Suspense>
            </div>
        </div>
    );
};

export default Footer;