import React from 'react';

import data from '../data'; // || React.useEffect -> axios -> get -> data

const Options = (props) => {
    const { idPhotoBooths } = props;

    return (
        <div className="block-options">
            <h6 className="block-options__title">Доп. опции</h6>
            <form onSubmit={console.log('LUX')}>
                <div className="block-options__types">
                    {
                        data.allOptions.options.map((option, index) => {
                            return (
                                <div className="block-options__types__item" key={option.id}>
                                    <label htmlFor={`checkbox${idPhotoBooths}_${option.id}`} >
                                        <div className="item-img">
                                            <img src={option.src} alt="booths" width="60" height="60" />
                                        </div>
                                        <div className="item-options">
                                            <p className="item-options__type">{option.title} # {option.id}</p>
                                            <p className="item-options__price">от {option.price} ₽</p>
                                        </div>
                                    </label>
                                    <input type="checkbox" id={`checkbox${idPhotoBooths}_${option.id}`} name={`options${idPhotoBooths}_${option.id}`} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="block-options__times">
                    <h5 className="block-options__times__title">Укажите время аренды</h5>
                    <div className="block-options__times__time-values-list">
                        <div className="form_radio_btn">
                            <input id={ `radio-1${ idPhotoBooths }`}  type="radio" name="radio" value="1 час" defaultChecked />
                            <label htmlFor={ `radio-1${ idPhotoBooths }`} >1 час</label>
                        </div>
                        <div className="form_radio_btn">
                            <input id={ `radio-2${ idPhotoBooths }`} type="radio" name="radio" value="2 часа" />
                            <label htmlFor={ `radio-2${ idPhotoBooths }`} >2 часа</label>
                        </div>
                        <div className="form_radio_btn">
                            <input id={ `radio-3${ idPhotoBooths }`}  type="radio" name="radio" value="3 часа" />
                            <label htmlFor={ `radio-3${ idPhotoBooths }`} >3 часа</label>
                        </div>
                        <div className="form_radio_btn">
                            <input id={ `radio-4${ idPhotoBooths }`}  type="radio" name="radio" value="5 часов" />
                            <label htmlFor={ `radio-4${ idPhotoBooths }`} >5 часов</label>
                        </div>
                        <div className="form_radio_btn">
                            <input id={ `radio-5${ idPhotoBooths }`}  type="radio" name="radio" value="выставка 2 дня" />
                            <label htmlFor={ `radio-5${ idPhotoBooths }`}>выставка 2 дня</label>
                        </div>
                        <div className="form_radio_btn">
                            <input id={ `radio-6${ idPhotoBooths }`}  type="radio" name="radio" value="выставка 3 дня" />
                            <label htmlFor={ `radio-6${ idPhotoBooths }`}>выставка 3 дня</label>
                        </div>
                    </div>
                </div>
                {/* <div className="block-options__send">
                    <p>17000 ₽</p>
                    <button type="submit">Оставить заявку</button>
                </div> */}
            </form>
        </div>
    );
};

export default Options;