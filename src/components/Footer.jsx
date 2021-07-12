import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer">
            <div className="container">
                <p>FOOTER</p>
            </div>
        </div>
    );
};

export default Footer;