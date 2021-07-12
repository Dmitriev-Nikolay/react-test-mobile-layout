import React from 'react';

import { Logo } from '../components';
import groupballs from '../assets/img/groupballs.png';
import rectangle from '../assets/img/rectangle.png';
import ellipse from '../assets/img/ellipse.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Logo />
                <section class="header__video-top">
                    <div class="header__video-item">
                        <img src={groupballs} alt="groupballs" width="82px" height="44px" />
                    </div>
                    <div class="header__video-border">
                        <img src={rectangle} alt="rectangle" />
                    </div>
                    <video class="header__video" id='video' width="315" height="188" poster="img/bg_photo.png" loop="true" muted="muted">
                        <source src="video/nature_project.webm" type='video/webm; codecs="vp8, vorbis"' />
                    </video>
                    <div class="header__video-pic">
                        <img src={ellipse} alt="ellipse" width="125px" height="125px" />
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;