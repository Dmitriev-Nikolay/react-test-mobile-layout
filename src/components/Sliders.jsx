import React from 'react';
import ImageGallery from 'react-image-gallery';

const Sliders = React.memo(({ sliderImgs }) => {    
    return (
        <>
            <ImageGallery
                items={ sliderImgs }
                showPlayButton={ false }
                showFullscreenButton={ false }
                showBullets={ true }
                showThumbnails={ false }
            />
        </>
    );
});

export default Sliders;