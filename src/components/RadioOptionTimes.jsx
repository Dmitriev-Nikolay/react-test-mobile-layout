import React from 'react';

const RadioOptionTimes = React.memo(({ indexForDefaultChecked, optionTimesId, optionTimesTitle, optionTimesPrice, idPhotoBooths, priceCurrentBooth, calcTotalPrice }) => {
    const [currentValue, setCurrentValue] = React.useState(optionTimesPrice + priceCurrentBooth);

    const handleChangeRadio = (e) => setCurrentValue(+e.target.value);

    const getFinalPriceBooth = (price, check, type) => calcTotalPrice(price, check, type);

    return (
        <div>
            <input
                defaultChecked={ indexForDefaultChecked === 0 }
                id={ `${ optionTimesId }_${ idPhotoBooths }` }
                type="radio"
                name={ `optionTimes${ idPhotoBooths }` }
                value={ optionTimesPrice + priceCurrentBooth }
                onChange={ (e) => handleChangeRadio(e) }
                onClick={(e) => getFinalPriceBooth(currentValue, e.currentTarget.checked, e.currentTarget.type) }
            />
            <label htmlFor={ `${ optionTimesId }_${ idPhotoBooths }` }>
                { optionTimesTitle }
            </label>
        </div>
    );
});

export default RadioOptionTimes;