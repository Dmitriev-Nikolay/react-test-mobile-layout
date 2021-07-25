import React from 'react';

import { Sliders, Options, Popup } from '../components';

import data from '../data';
import photo from '../assets/img/photo.png';

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

const PhotoBooth = React.memo((props) => {
    const { photoBoothsId, title, size, price, number } = props;

    const [isOpenOrderForm, setIsOpenOrderForm] = React.useState(false); // default hidden
    const [finalPriceObj, setFinalPriceObj] = React.useState(null);
    const [finalPrice, setFinalPrice] = React.useState(0);
    const [orderedBooth, setOrderedBooth] = React.useState({});
    const [selectedOptions, setSelectedOptions] = React.useState([]);

    React.useEffect(() => { // when loading, we will set the base price of the booth for 1 hour
        setFinalPriceObj({
            baseBoothPrice: price + data.allOptions.optionsTimes[0].price,
            allOptionsPrice: 0,
        });
        setFinalPrice(Object.values({
            baseBoothPrice: price + data.allOptions.optionsTimes[0].price,
            allOptionsPrice: 0,
        }).reduce((allPrice, elemPrice) => allPrice += elemPrice), 0);
    }, [price]);

    const handleLeaveRequest = () => {
        setIsOpenOrderForm(true) // visible on
        document.body.style.overflow = "hidden"; // do not scroll the body
        const orderBooth = {
            finalPrice,
            selectedOptions,
        };
        setOrderedBooth(orderBooth);
    };

    const calculateTotalPrice = (valuePriceType, checkedCheckbox, type) => {
        switch (type) {
            case 'checkbox':
                let objTypePrice = finalPriceObj;
                if (checkedCheckbox) {
                    objTypePrice.allOptionsPrice += valuePriceType;
                } else {
                    objTypePrice.allOptionsPrice -= valuePriceType;
                };
                setFinalPriceObj(objTypePrice);
                setFinalPrice(Object.values(objTypePrice).reduce((allPrice, elemPrice) => allPrice += elemPrice));
                break;
            case 'radio':
                let objTimePrice = finalPriceObj;
                objTimePrice.baseBoothPrice = valuePriceType;
                setFinalPriceObj(objTimePrice);
                setFinalPrice(Object.values(objTimePrice).reduce((allPrice, elemPrice) => allPrice += elemPrice));
                break;
            default: break;
        };
    };

    return (
        <div className="photo-booth">
            <Sliders sliderImgs={ sliderImgs } />
            <div className="photo-booth__desc">
                <h3 className="title">{ title } № { number }</h3>
                <p className="size">Размер: <span className="size__value">{ size }</span></p>
            </div>
            <Options
                optionsTypes={ data.allOptions.optionsTypes }
                optionsTimes={ data.allOptions.optionsTimes }
                idPhotoBooths={ photoBoothsId }
                priceCurrentBooth={ price }
                selectedOptions={ selectedOptions }
                setSelectedOptions={ setSelectedOptions }
                getTotalPrice={ calculateTotalPrice }
            />
            <div className="photo-booth__send">
                <p>{ 'From number:', finalPrice.toLocaleString('ru-RU') } ₽</p>
                <button onClick={ handleLeaveRequest }>Оставить заявку</button>
            </div>
            {
                isOpenOrderForm &&
                <Popup
                    visible={ isOpenOrderForm }
                    setVisible={ setIsOpenOrderForm }
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
                                <div>
                                    <p>{ 'From number:', price.toLocaleString('ru-RU') } ₽</p>
                                </div>
                            </div>
                            <div className="current-booth-for-order__booth-day">
                                <select>
                                    {
                                        data.allOptions.optionsTimes.map((selectTime, index) => {
                                            return (
                                                <option>{ selectTime.title }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="current-booth-for-order__selected-options">
                                <ul>
                                    {
                                        selectedOptions.length ?
                                            selectedOptions.map((option, index) => {
                                                return (
                                                    <li key={ `${ index }_${ option.optionTypesPrice }` }>
                                                        <p>{ option.optionTypesTitle } # { option.optionTypesId }</p>
                                                        <span>{ 'From number:', option.optionTypesPrice.toLocaleString('ru-RU') } ₽</span>
                                                    </li>
                                                )
                                            })
                                            : <li>
                                                <p>Тебе стоит добавить доп. опции 😢</p>
                                            </li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="current-booth-for-order__total">
                            <p>Итого:</p>
                            <span>{ 'From number:', orderedBooth.finalPrice.toLocaleString('ru-RU') } ₽</span>
                        </div>
                        <form>
                            <div className="current-booth-for-order__phone">
                                <input type="tel" placeholder="+7(000)000-00-00" pattern="[\+()]*(?:\d[\s\-\.()xX]*){10,14}" required />
                                <div>
                                    <span>Позвоните мне</span>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66666 0.999918L6.99999 6.33325L12.3333 0.999918" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <button type="submit">Отправить заявку</button>
                        </form>
                    </div>
                </Popup>
            }
        </div>
    );
});

export default PhotoBooth;