import React from 'react';

const SelectOptionsTimes = React.memo(({ optionsSelectTimes, idPhotoBooths, priceCurrentBooth, selectedTime, calcTotalPrice }) => {
    const [currentValue, setCurrentValue] = React.useState(selectedTime);

    const handleChangeRadio = (e) => setCurrentValue(+e.target.value);

    React.useEffect(() => {
        calcTotalPrice(currentValue);
    }, [calcTotalPrice, currentValue]);

    return (
        <>
            <select  
                defaultValue={ selectedTime }
                onChange={ (e) => handleChangeRadio(e) }
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
        </>
    );
});

export default SelectOptionsTimes;