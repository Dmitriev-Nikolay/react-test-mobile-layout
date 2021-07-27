import React from 'react';

import mainLogo from '../assets/svg/main_logo.svg';

const Logo = () => {
    return (
        <div className="header__logo">
            <img src={ mainLogo } alt="Main logo" width="63" height="60"/>
        </div>
    );
};

export default Logo;