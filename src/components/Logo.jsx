import React from 'react';

import MainLogo from '../assets/svg/main_logo.svg';

const Logo = () => {
    return (
            <div className="header__logo">
                <img width="38" src={ MainLogo } alt="Main logo" />
            </div>
    );
};

export default Logo;