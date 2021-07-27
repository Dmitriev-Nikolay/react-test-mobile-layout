import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import myLogo from '../assets/img/My_logo.png';
import upIcon from '../assets/svg/up.svg';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const mapState = { center: [55.673763, 37.734982], zoom: 15 };

    const placeMark = {
        geometry: [55.673763, 37.734982],
        properties: {
            hintContent: '109382, Москва, пр. Егорьевский, д.2а, стр.10',
            balloonContent: '109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с улицы Люблинская',
        },
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
                        <img width="40" src={ myLogo } alt="My logo"/>
                    </a>
                </div>
                <div className="footer__up" onClick={ scrollToTop }>
                    <p>вверх</p>
                    <img src={ upIcon } alt="up" />
                    <p>вверх</p>
                </div>
                <YMaps>
                    <div>
                        <Map state={ mapState }>
                            <Placemark 
                                { ...placeMark } 
                                modules={ ['geoObject.addon.balloon', 'geoObject.addon.hint'] }
                            />
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    );
};

export default Footer;