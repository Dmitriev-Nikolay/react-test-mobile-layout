import React from 'react';

import { Sliders } from '.';

import photo from '../assets/img/photo.png';

const PhotoBooths = () => {
    // const sliderImgs = [
    //     <img alt={photo} src={photo} />,
    //     <img alt={photo} src={photo} />,
    //     <img alt={photo} src={photo} />,
    //     <img alt={photo} src={photo} />,
    //     <img alt={photo} src={photo} />,
    // ];

    const sliderImgs = [
        {
            eachSlide: 'url(https://unsplash.it/1900/1024/?image=497)',
        },
        {
            eachSlide: 'url(https://unsplash.it/1900/1024/?image=291)',
        },
        {
            eachSlide: 'url(https://unsplash.it/1900/1024/?image=786)',
        },
        {
            eachSlide: 'url(https://unsplash.it/1900/1024/?image=768)',
        },
        {
            eachSlide: 'url(https://unsplash.it/1900/1024/?image=726)',
        },
        {
            eachSlide: 'url(https://unsplash.it/1900/1024/?image=821)',
        }
    ];

    return (
        <div className="photo-booths">
            <div className="sort"></div>
            <Sliders />
            <div className="photo-booths__desc">
                <h3 className="photo-booths__title">Фотобудка с ширмой №1</h3>
                <p className="photo-booths__size">Размер: <span>2м х 1.5м х 2м</span></p>
            </div>
            <div className="photo-booths__block-options">
                <form onSubmit={console.log('LUX')}>
                    <div className="types-options">
                        <h6 className="types-options__title">Доп. опции</h6>
                        <label className="types-options__item">
                            <div className="item-img">
                                <img src="" alt="photo booths" />
                            </div>
                            <div className="item-options">
                                <p></p>
                                <p></p>
                                <input type="checkbox" />
                            </div>
                        </label>
                        <label className="types-options__item">
                            <div className="item-img">
                                <img src="" alt="photo booths" />
                            </div>
                            <div className="item-options">
                                <p></p>
                                <p></p>
                                <input type="checkbox" />
                            </div>
                        </label>
                    </div>
                    <div className="times-options">
                        <h5 className="times-options__title">Укажите время аренды</h5>
                        <div className="times-options__time-values-list">
                            <ul>
                                <li><input type="button" value="1 час" /></li>
                                <li><input type="button" value="2 часа" /></li>
                                <li><input type="button" value="3 часа" /></li>
                                <li><input type="button" value="5 часов" /></li>
                                <li><input type="button" value="выставка 2 дня" /></li>
                                <li><input type="button" value="выставка 3 дня" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="send-block">
                        <span>17000 р</span>
                        <button type="submit">Оставить заявку</button>
                    </div>
                </form>
            </div>

            {/* <img className="burger-block__image"
                src={imageUrl}
                alt={name}
            />
            <div className="burger-block__rating">
                <img width="20" src={starIcon} alt="Star icon" />
                {rating}
            </div>
            <h4 className="burger-block__title">{name}</h4>
            <div className="burger-block__selector">
                <ul>
                    {
                        typeNames.map((type, index) => (
                            <li
                                onClick={() => onSelectedType(index)}
                                className={classNames({
                                    "active": activeType === index,
                                    "disabled": !types.includes(index),
                                })
                                }
                                key={`${type}_${index}`}>
                                {type}
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        Object.keys(sizeNames).map((size, index) => (
                            <li
                                onClick={() => onSelectedSize(index)}
                                className={classNames({
                                    "active": activeSize === index,
                                    "disabled": !sizes.includes(index),
                                })
                                }
                                key={`${size}_${index}`}>
                                {size}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="burger-block__bottom">
                <div className="burger-block__price">{finalPrice} ₽</div>
                <div
                    onClick={onAddBurger}
                    className={classNames({
                        "button button--outline button--add": true,
                        "disabled": price === 0,
                    })
                    }
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 
                            4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 
                            12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {
                        burgerCountInСart && <i>{burgerCountInСart}</i>
                    }
                </div>
            </div> */}
        </div>
    );
};

export default PhotoBooths;
