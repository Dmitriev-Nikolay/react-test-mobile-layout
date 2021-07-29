import React from 'react';

const SelectOptionsTimes = React.memo(({ optionsSelectTimes, idPhotoBooths, priceCurrentBooth, selectedTime, calcTotalPrice }) => {
    const [currentValue, setCurrentValue] = React.useState(selectedTime);

    const handleChangeRadio = (e) => setCurrentValue(+e.target.value);

    const getFinalPriceBooth = (price) => calcTotalPrice(price);

    return (
        <select  
            defaultValue={ selectedTime }
            onChange={ (e) => handleChangeRadio(e) }
        >
            {
                optionsSelectTimes.map((select) => {
                    return (
                        <option
                            onChange={ getFinalPriceBooth(currentValue) }
                            value={ select.price + priceCurrentBooth }
                            key={ `${ select.id }_${ idPhotoBooths }` }
                            id={ `${ select.id }_${ idPhotoBooths }` }
                        >
                            { select.title }
                        </option>
                    )
                })
            }
        </select>
    );
});

export default SelectOptionsTimes;