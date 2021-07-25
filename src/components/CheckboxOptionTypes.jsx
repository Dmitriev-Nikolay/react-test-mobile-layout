import React from "react";

const CheckboxOptionTypes = React.memo((props) => {
    const { optionTypesId, optionTypesImgSrc, optionTypesTitle, optionTypesPrice, idPhotoBooths, calcTotalPrice, setSelectedOptions, selectedOptions } = props;
    const [isChecked, setIsChecked] = React.useState(false);

    const changeCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const selectCurrentOption = (optionTypesId, optionTypesPrice, optionTypesTitle, isChecked) => {
        const selectOption = {
            optionTypesId,
            optionTypesPrice,
            optionTypesTitle,
        };
        if (isChecked) {
            selectedOptions.push(selectOption);
        } else {
            selectedOptions.splice(selectedOptions.indexOf(selectedOptions.find((el) => el.optionTypesId === selectOption.optionTypesId)), 1);
        }
        selectedOptions.sort((a, b) => a.optionTypesId - b.optionTypesId); // sort before transfer
        setSelectedOptions(selectedOptions);
    };

    const getFinalPriceBooth = (price, check, type) => {
        calcTotalPrice(price, check, type);
    };

    return (
        <label htmlFor={ `${ optionTypesId }_${ idPhotoBooths }` }>
            <div className="block-options__types__item">
                <div className="item-img">
                    <img src={ optionTypesImgSrc } alt="booths" width="60" height="60"/>
                </div>
                <div className="item-options">
                    <p className="item-options__type">{ optionTypesTitle } # { optionTypesId }</p>
                    <p className="item-options__price">от { 'From number:', optionTypesPrice.toLocaleString('ru-RU') } ₽</p>
                </div>
                <input
                    id={ `${ optionTypesId }_${ idPhotoBooths }` }
                    type="checkbox"
                    value={ isChecked }
                    onClick={(e) => {
                        changeCheckbox();
                        getFinalPriceBooth(optionTypesPrice, !isChecked, e.currentTarget.type);
                        selectCurrentOption(optionTypesId, optionTypesPrice, optionTypesTitle, !isChecked);
                    }}
                />
            </div>
        </label>
    );
});

export default CheckboxOptionTypes;