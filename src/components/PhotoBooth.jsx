import React from 'react';

import { Sliders, Options, Popup, PhotoBoothOrder } from '../components';

import data from '../data';

const PhotoBooth = React.memo(({ photoBoothsId, title, size, price, number }) => {
    const [isOpenOrderForm, setIsOpenOrderForm] = React.useState(false); // default hidden
    const [finalPriceObj, setFinalPriceObj] = React.useState({
        baseBoothPrice: price + data.allOptions.optionsTimes[0].price,
        allOptionsPrice: 0,
    });
    const [finalPrice, setFinalPrice] = React.useState(Object.values({
        baseBoothPrice: price + data.allOptions.optionsTimes[0].price,
        allOptionsPrice: 0,
    }).reduce((allPrice, elemPrice) => allPrice += elemPrice), 0);
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [selectedTime, setSelectedTime] = React.useState(price + data.allOptions.optionsTimes[0].price);

    const handleLeaveRequest = () => {
        setIsOpenOrderForm(true) // visible on
        document.body.style.overflow = "hidden"; // do not scroll the body
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
                setSelectedTime(valuePriceType); // for popup select time option
                setFinalPriceObj(objTimePrice);
                setFinalPrice(Object.values(objTimePrice).reduce((allPrice, elemPrice) => allPrice += elemPrice));
                break;
            default:
                break;
        };
    };

    return (
        <div className="photo-booth">
            <Sliders sliderImgs={ data.sliderData.sliderImgs }/>
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
                    <PhotoBoothOrder 
                        photoBoothsId={ photoBoothsId }
                        title={ title }
                        size={ size }
                        price={ price }
                        number={ number }
                        finalPrice={ finalPrice }
                        selectedTime={ selectedTime }
                        selectedOptions={ selectedOptions }
                        setFinalPrice={ setFinalPrice }
                        setFinalPriceObj={ setFinalPriceObj }
                        finalPriceObj={ finalPriceObj }
                    />
                </Popup>
            }
        </div>
    );
});

export default PhotoBooth;