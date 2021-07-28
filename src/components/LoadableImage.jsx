import React from 'react';

import classNames from 'classnames';

const LoadableImage = (props) => {
    const { src, alt = '', onLoad = () => { }, width, height, classStyles } = props;
    const [isLoaded, setIsLoaded] = React.useState(false);
    const imageRef = React.useRef(null);
    const containerImgRef = React.useRef(null);

    const useOnScreen = (ref, rootMargin = '0px') => {
        const [isIntersecting, setIntersecting] = React.useState(false);

        React.useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },
                {
                    rootMargin
                }
            );
            if (ref.current) {
                observer.observe(ref.current);
            }
            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                };
            };
        }, []);
        return isIntersecting;
    };

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