import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import useOnScreen from '../hooks/useOnScreen';

const YandexCard = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const cardRef = React.useRef(null);
    const containerCardRef = React.useRef(null);
    const isVisible = useOnScreen(containerCardRef);

    const mapState = { center: [55.673763, 37.734982], zoom: 15 };
    const placeMark = {
        geometry: [55.673763, 37.734982],
        properties: {
            hintContent: '109382, Москва, пр. Егорьевский, д.2а, стр.10',
            balloonContent: '109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с улицы Люблинская',
        },
    };

    React.useEffect(() => {
        if (!isVisible || isLoaded) {
            return;
        };
        if (cardRef.current) {
            cardRef.current.onload = () => {
                setIsLoaded(true);
            };
        };
    }, [isVisible, isLoaded]);

    return (
        <div ref={ containerCardRef }>
            {
                (isVisible || isLoaded) &&
                (
                    <YMaps ref={ cardRef }>
                        <Map state={ mapState }>
                            <Placemark
                                { ...placeMark }
                                modules={ ['geoObject.addon.balloon', 'geoObject.addon.hint'] }
                            />
                        </Map>
                    </YMaps>
                )
            }
        </div>
    );
};

export default YandexCard;