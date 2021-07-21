import React from 'react';

import mainLogo from '../assets/svg/main_logo.svg';

const Logo = () => {
    return (
        <div className="header__logo">
            <img width="63" src={ mainLogo } alt="Main logo" />
        </div>
    );
};

export default Logo;