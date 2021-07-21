import React from 'react';

import { Sliders, Options, Popup } from '../components';

import photo from '../assets/img/photo.png';

const PhotoBooth = (props) => {
    const { photoBoothsId, title, size, price, number } = props;

    const [isSubmit, setIsSubmit] = React.useState(false); // default hidden

    const handleSubmit = () => {
        setIsSubmit(true) // visible on
        document.body.style.overflow = "hidden"; // do not scroll the body
    };

    const sliderImgs = [
        {
            original: photo,
        },
        {
            original: photo,
        },
        {
            original: photo,
        },
        {
            original: photo,
        },
        {
            original: photo,
        }
    ];

    return (
        <div className="photo-booth">
            <Sliders sliderImgs={ sliderImgs } />
            <div className="photo-booth__desc">
                <h3 className="title">{ title } № { number }</h3>
                <p className="size">Размер: <span className="size__value">{ size }</span></p>
            </div>
            <Options idPhotoBooths={photoBoothsId} />
            <div className="block-options__send">
                <p>{ price } ₽</p>
                <button type="submit" onClick={ handleSubmit }>Оставить заявку</button>
            </div>
            {
                isSubmit &&
                <Popup
                    visible={ isSubmit }
                    setVisible={ setIsSubmit }
                >
                    <div className="current-booth-for-order">
                        <div className="current-booth-for-order__title-order">
                            <p>Ваша заявка</p>
                        </div>
                        <div className="current-booth-for-order__current-options">
                            <div className="current-booth-for-order__booth-info">
                                <div>
                                    <p className="title">Фотобудка с ширмой</p>
                                    <p className="size">Размер: <span className="value-size">2м x 1.5м x 2 м</span></p>
                                </div>
                                <p>17000 ₽</p>
                            </div>
                            <div className="current-booth-for-order__booth-day">
                                <select>
                                    <option>Пункт 1</option>
                                    <option>Пункт 2</option>
                                </select>
                            </div>
                            <div className="current-booth-for-order__selected-options">
                                <ul>
                                    <li>
                                        <p>Разработка макета рамки</p>
                                        <span>17500 ₽</span>
                                    </li>
                                    <li>
                                        <p>Разработка макета рамки</p>
                                        <span>17500 ₽</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="current-booth-for-order__total">
                            <p>Итого:</p>
                            <span>17500 ₽</span>
                        </div>
                        <div className="current-booth-for-order__phone">
                            <input type="phone" />
                        </div>
                        <button>Отправить заявку</button>
                    </div>
                </Popup>
            }
        </div>
    );
};

export default PhotoBooth;
