import React from 'react';

const SelectOptionsTimes = React.memo((props) => {
    const { optionsSelectTimes, idPhotoBooths, priceCurrentBooth, selectedTime, getTotalPrice } = props;
    
    const [currentValue, setCurrentValue] = React.useState(selectedTime);

    const handleChangeRadio = (e) => {
        let value = +e.target.value;
        setCurrentValue(value);
    };

    const calcTotalPrice = (price) => {
        getTotalPrice(price);
    };

    return (
        <select  
            defaultValue={ selectedTime }
            onChange={ (e) => handleChangeRadio(e) } 
            onClick={ () => calcTotalPrice(currentValue) }
        >
            {
                optionsSelectTimes.map((select) => {
                    return (
                        <option
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