import React from 'react';

import { FaqsItem } from '../components';

import data from '../data';

const FaqsMenu = () => {
    return (
        <div className="faqs">
            <p>Почему выбирают нас?</p>
            <h1>FAQ</h1>
            <div className="faqs__items">
                {
                    Array.from(Array(5)).map((_, index) => {
                        return (
                                <FaqsItem 
                                    key={ index + Math.random() ** 2 } 
                                    title={ data.accordionData.title } 
                                    content={ data.accordionData.content } 
                                />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FaqsMenu;