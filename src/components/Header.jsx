import React from 'react';

import { Logo } from '../components';

import groupballs from '../assets/img/groupballs.png';
import rectangle from '../assets/img/rectangle.png';
import ellipse from '../assets/img/ellipse.png';

import mask from '../assets/svg/mask.svg';
import infiniti from '../assets/svg/infiniti.svg';
import ticket from '../assets/svg/ticket.svg';
import photo from '../assets/svg/photo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Logo />
                <section className="header__video-top">
                    <svg width="100%" height="100%" viewBox="-18 -20 360 263"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <image xlinkHref={rectangle} x="0" y="0" />
                        <image xlinkHref={groupballs} x="255" y="-10" width="82" height="44" />
                        <image className="ellipse" xlinkHref={ellipse} x="-7" y="125" width="105px" height="105px" />
                    </svg>
                </section>
                <section className="header__main-title">
                    <h1>
                        <span className="colortext">Фото на</span>
                        <span>праздник</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                <section className="header__features-body">
                    <div className="firsth-block">
                        <div className="firsth-block__row">
                            <div className="firsth-block__column">
                                <div className="firsth-block__item">
                                    <img src={infiniti} alt="infiniti" />
                                    <p>Безлимитная печать фото</p>
                                </div>
                            </div>
                            <div className="firsth-block__column">
                                <div className="firsth-block__item">
                                    <img src={mask} alt="mask" />
                                    <p>Фотореквизит в наличии</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second-block">
                        <div className="second-block__row">
                            <div className="second-block__column">
                                <div className="second-block__item">
                                    <div className="second-block__item-photo">
                                        <img src={photo} alt="photo" />
                                    </div>
                                    <p>Фотоотчет в электронном виде</p>
                                </div>
                            </div>
                            <div className="second-block__column">
                                <div className="second-block__item">
                                    {/* <div className="second-block__item-photo"> */}
                                    <img src={ticket} alt="ticket" />
                                    {/* </div> */}
                                    <p>Цены ниже рынка</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <ul className="features-list">
                        <li>
                            <img src={infiniti} alt="infiniti" />
                            <p>Безлимитная печать фото</p>
                        </li>
                        <li>
                            <img src={mask} alt="mask" />
                            <p>Фотореквизит в наличии</p>
                        </li>
                        <li>
                            <img src={photo} alt="photo" />
                            <p>Фотоотчет в электронном виде</p>
                        </li>
                        <li>
                            <img src={ticket} alt="ticket" />
                            <p>Цены ниже рынка</p>
                        </li>
                    </ul> */}
                </section>
            </div>
        </header>
    );
};

export default Header;