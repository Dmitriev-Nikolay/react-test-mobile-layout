import React from 'react';

import { Popup } from '../components';

import groupballs from '../assets/img/groupballs.png';
import rectangle from '../assets/img/rectangle.png';
import ellipse from '../assets/img/ellipse.png';
import videoBackground from '../assets/img/bg-video.webp';
import videoPlay from '../assets/img/video-play.png';

import mask from '../assets/svg/mask.svg';
import infiniti from '../assets/svg/infiniti.svg';
import ticket from '../assets/svg/ticket.svg';
import photo from '../assets/svg/photo.svg';

import mainLogo from '../assets/svg/main_logo.svg';

const Header = () => {
    const [visibleVideo, setVisibleVideo] = React.useState(false); // default hidden
    const [youtubeID] = React.useState('Q6nepw3fskg');
    
    const playVideo = () => {
        setVisibleVideo(true);
        document.body.style.overflow = "hidden"; // do not scroll the body
    };

    return (
        <header className="header">
            <div className="container">
                <img className="header__logo" src={ mainLogo } alt="Main logo" width="63" height="60"/>
                <section className="header__video-top" onClick={ playVideo }>
                    <svg width="100%" height="100%" viewBox="-18 -20 360 263"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <image xlinkHref={ rectangle } x="0" y="0"/>
                        <image xlinkHref={ groupballs } x="255" y="-10" width="82" height="44"/>
                        <image className="ellipse" xlinkHref={ ellipse } x="-7" y="125" width="105" height="105"/>
                    </svg>
                    <img className="video-background" src={ videoBackground } alt="video" width="285" height="170"/>
                    <img className="video-play" src={ videoPlay } alt="play" width="70" height="70"/>
                </section>
                <section className="header__main-title">
                    <h1 className="colortext">Фото на<span>праздник</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <span className="colortext-small">adipiscing elit</span>,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>
                <section className="header__features-body">
                    <div className="firsth-block__row">
                        <div className="firsth-block__item">
                            <img src={ infiniti } alt="infiniti" width="42" height="21"/>
                            <p>Безлимитная<br />печать фото</p>
                        </div>
                        <div className="firsth-block__item">
                            <img src={ mask } alt="mask" width="48" height="48"/>
                            <p>Фотореквизит<br />в наличии</p>
                        </div>
                    </div>
                    <div className="second-block__row">
                        <div className="second-block__item">
                            <img src={ photo } alt="cards" width="41" height="34"/>
                            <p>Фотоотчет в<br />электронном виде</p>
                        </div>
                        <div className="second-block__item">
                            <img src={ ticket } alt="ticket" width="35" height="35"/>
                            <p>Цены<br />ниже рынка</p>
                        </div>
                    </div>
                </section>
                { 
                    visibleVideo &&  
                    <Popup 
                        visible={ visibleVideo } 
                        setVisible={ setVisibleVideo }
                    >
                        <iframe className='video'
                            title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={ `https://youtube.com/embed/${ youtubeID }?autoplay=0` }>
                        </iframe>
                    </Popup>         
                } 
            </div>
        </header>
    );
};

export default Header;