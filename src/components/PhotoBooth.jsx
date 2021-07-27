import React from 'react';

import { Sliders, Options, Popup, SelectOptionsTimes } from '../components';

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
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [selectedTime, setSelectedTime] = React.useState(null);

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
    };

    const calculateTotalPrice = (valuePriceType, checkedCheckbox, titleOption, type) => {
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
                setSelectedTime(valuePriceType); // for popup select time option
                setFinalPriceObj(objTimePrice);
                setFinalPrice(Object.values(objTimePrice).reduce((allPrice, elemPrice) => allPrice += elemPrice));
                break;
            default: 
                let objTimePriceSelect = finalPriceObj;
                objTimePriceSelect.baseBoothPrice = valuePriceType;
                setFinalPriceObj(objTimePriceSelect);
                let allPrice = Object.values(objTimePriceSelect).reduce((allPrice, elemPrice) => allPrice += elemPrice);
                setFinalPrice(allPrice);
                break;
        };
    };

    return (
        <div className="photo-booth">
            <Sliders sliderImgs={ sliderImgs }/>
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
                <p>{ finalPrice.toLocaleString('ru-RU') } ₽</p>
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
                                    <p>{ price.toLocaleString('ru-RU') } ₽</p>
                                </div>
                            </div>
                            <div className="current-booth-for-order__booth-times">
                                <SelectOptionsTimes 
                                    optionsSelectTimes={ data.allOptions.optionsTimes }
                                    idPhotoBooths={ photoBoothsId }
                                    priceCurrentBooth={ price }
                                    selectedTime={ selectedTime }
                                    getTotalPrice={ calculateTotalPrice }
                                />
                            </div>
                            <div className="current-booth-for-order__selected-options">
                                <ul>
                                    {
                                        selectedOptions.length ?
                                            selectedOptions.map((option, index) => {
                                                return (
                                                    <li key={ `${ index }_${ option.optionTypesPrice }` }>
                                                        <p>{ option.optionTypesTitle } # { option.optionTypesId }</p>
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
                                <input type="tel" placeholder="+7 (000) 000-00-00" pattern="[\+()]*(?:\d[\s\-\.()xX]*){10,14}" required/>
                                <div>
                                    <span>Позвоните мне</span>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66666 0.999918L6.99999 6.33325L12.3333 0.999918" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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