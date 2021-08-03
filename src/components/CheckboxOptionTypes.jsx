import React from "react";

// import { LoadableImage } from '../components';

const CheckboxOptionTypes = React.memo(({ optionTypesId, optionTypesImgSrc, optionTypesTitle, optionTypesPrice, idPhotoBooths, calcTotalPrice, setSelectedOptions, selectedOptions }) => {    
    const [isChecked, setIsChecked] = React.useState(false);

    const changeCheckbox = () => setIsChecked(!isChecked);

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

    const getFinalPriceBooth = (price, check, type) => calcTotalPrice(price, check, type);

    return (
        <div className="block-options__types__item">
            <label htmlFor={ `${ optionTypesId }_${ idPhotoBooths }` }>
                <div className="block-info-options">
                    <img src={ optionTypesImgSrc } alt="booths" width="60" height="60"/>
                    <div className="item-options">
                        <p className="item-options__type">{ optionTypesTitle } #{ optionTypesId }</p>
                        <p className="item-options__price">от { optionTypesPrice.toLocaleString('ru-RU') } ₽</p>
                    </div>
                </div>
            </label>
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
            <span></span>
        </div>
    );
});

export default CheckboxOptionTypes;