import React from 'react';

import classNames from 'classnames';

import useOnScreen from '../hooks/useOnScreen';

const LoadableImage = ({ src, alt = '', onLoad = () => { }, width, height, classStyles }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const imageRef = React.useRef(null);
    const containerImgRef = React.useRef(null);
    const isVisible = useOnScreen(containerImgRef);

    React.useEffect(() => {
        if (!isVisible || isLoaded) {
            return;
        };
        if (imageRef.current) {
            imageRef.current.onload = () => {
                setIsLoaded(true);
                onLoad();
            };
        };
    }, [isVisible, onLoad, isLoaded])

    return (
        <div ref={ containerImgRef }
            className={classNames({
                [classStyles.containerImgLoaded]: isLoaded,
                [classStyles.containerImg]: !isLoaded,
            })
            }
        >
            {
                (isVisible || isLoaded) &&
                (
                    <img ref={ imageRef }
                        className={classNames({
                            [classStyles.imgLoaded]: isLoaded,
                            [classStyles.img]: !isLoaded,
                        })
                        }
                        src={ src }
                        alt={ alt }
                        width={ width }
                        height={ height }
                    />
                )
            }
        </div>
    );
};

export default LoadableImage;