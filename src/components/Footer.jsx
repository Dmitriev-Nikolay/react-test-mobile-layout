import React from 'react';


import phone from '../assets/svg/phone.svg';
import address from '../assets/svg/address.svg';

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
            </div>
        </div>
    );
};

export default Footer;