import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexCard = () => {

    const mapState = { center: [55.673763, 37.734982], zoom: 15 };

    const placeMark = {
        geometry: [55.673763, 37.734982],
        properties: {
            hintContent: '109382, Москва, пр. Егорьевский, д.2а, стр.10',
            balloonContent: '109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с улицы Люблинская',
        },
    };

    return (
        <YMaps>
            <div>
                <Map state={ mapState }>
                    <Placemark
                        { ...placeMark }
                        modules={ ['geoObject.addon.balloon', 'geoObject.addon.hint'] }
                    />
                </Map>
            </div>
        </YMaps>
    );
};

export default YandexCard;
