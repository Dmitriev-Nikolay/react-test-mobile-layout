import React from 'react';

import { CheckboxOptionTypes } from '../components';
import { RadioOptionTimes } from '../components';

const Options = React.memo((props) => {
    const { optionsTypes, optionsTimes, idPhotoBooths, priceCurrentBooth, selectedOptions, setSelectedOptions, getTotalPrice } = props;

    return (
        <div className="block-options">
            <h6 className="block-options__title">Доп. опции</h6>
            <div className="block-options__types">
                {
                    optionsTypes.map((optionTypes, index) => {
                        return (
                            <CheckboxOptionTypes
                                key={ `${ index }_${ optionTypes.id }` }
                                optionTypesId={ optionTypes.id }
                                optionTypesImgSrc={ optionTypes.src }
                                optionTypesTitle={ optionTypes.title }
                                optionTypesPrice={ optionTypes.price }
                                idPhotoBooths={ idPhotoBooths }
                                calcTotalPrice={ getTotalPrice }
                                setSelectedOptions={ setSelectedOptions }
                                selectedOptions={ selectedOptions }
                            />
                        )
                    })
                }
            </div>
            <div className="block-options__times">
                <h5 className="block-options__times__title">Укажите время аренды</h5>
                <div className="block-options__times__time-values-list">
                    {
                        optionsTimes.map((optionTimes, index) => {
                            return (
                                <RadioOptionTimes
                                    key={ `${ index }_${ optionTimes.id }` }
                                    indexForDefaultChecked={ index }
                                    optionTimesId={ optionTimes.id }
                                    optionTimesTitle={ optionTimes.title }
                                    optionTimesPrice={ optionTimes.price }
                                    idPhotoBooths={ idPhotoBooths }
                                    priceCurrentBooth={ priceCurrentBooth }
                                    calcTotalPrice={ getTotalPrice }
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
});

export default Options;
