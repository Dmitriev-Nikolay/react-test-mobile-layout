import React from 'react';

const Popup = React.memo(({ setVisible, children }) => {
    const closePopup = () => {
        setVisible(false); // visible off
        document.body.style.overflow = "scroll"; // return the scroll
    };

    return (
        <div className="popup-wrapper">
            <div className="popup-container">
                <div className="popup-content">
                    { children }
                </div>
                <span className="btn-close-popup" onClick={ closePopup }>х</span>
            </div>
        </div>
    );
});

export default Popup;