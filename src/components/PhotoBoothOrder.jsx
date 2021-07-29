import React from 'react';

import { SelectOptionsTimes } from '../components';

import data from '../data';

const PhotoBoothOrder = React.memo(({ photoBoothsId, title, size, price, number, finalPrice, selectedTime, selectedOptions, setFinalPrice, setFinalPriceObj, finalPriceObj }) => {
    const calculateTotalPricePopup = (valuePriceType) => {
        let objTimePriceSelect = finalPriceObj;
        objTimePriceSelect.baseBoothPrice = valuePriceType;
        setFinalPriceObj(objTimePriceSelect);
        let allPrice = Object.values(objTimePriceSelect).reduce((allPrice, elemPrice) => allPrice += elemPrice);
        setFinalPrice(allPrice);
    };

    return (
        <div className="current-booth-for-order">
            <div className="current-booth-for-order__title-order">
                <p>Ваша заявка</p>
            </div>
            <div className="current-booth-for-order__current-options">
                <div className="current-booth-for-order__booth-info">
                    <div>
                        <p className="title">{ title } № { number }</p>
                        <p className="size">Размер: <span className="value-size">{ size }</span></p>
                    </div>
                    <div>
                        <p>{ price.toLocaleString('ru-RU') } ₽</p>
                    </div>
                </div>
                <div className="current-booth-for-order__booth-times">
                    <SelectOptionsTimes
                        optionsSelectTimes={ data.allOptions.optionsTimes }
                        idPhotoBooths={ photoBoothsId }
                        priceCurrentBooth={ price }
                        selectedTime={ selectedTime }
                        calcTotalPrice={ calculateTotalPricePopup }
                    />
                </div>
                <div className="current-booth-for-order__selected-options">
                    <ul>
                        {
                            selectedOptions.length ?
                                selectedOptions.map((option, index) => {
                                    return (
                                        <li key={ `${ index }_${ option.optionTypesPrice }` }>
                                            <p>{ option.optionTypesTitle } #{ option.optionTypesId }</p>
                                            <span>{ option.optionTypesPrice.toLocaleString('ru-RU') } ₽</span>
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
                <span>{ finalPrice.toLocaleString('ru-RU') } ₽</span>
            </div>
            <form>
                <div className="current-booth-for-order__phone">
                    <input type="tel" placeholder="+7 (000) 000-00-00" pattern="[\+()]*(?:\d[\s\-\.()xX]*){10,14}" required />
                    <div>
                        <span>Позвоните мне</span>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66666 0.999918L6.99999 6.33325L12.3333 0.999918" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <button type="submit">Отправить заявку</button>
            </form>
        </div>
    );
});

export default PhotoBoothOrder;
