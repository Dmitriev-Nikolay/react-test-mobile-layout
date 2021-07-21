import React from 'react';

import { FaqsItem } from '../components';

const FaqsMenu = () => {
    const accordionData = {
        title: 'Какой реквизит идет в комплекте?',
        content: `Какой то текст для заголовка Какой 
        то текст для заго Какой то текст для заголовка 
        Какой то текст для загоКакой то текст для заголовка 
        Какой то текст для заго Какой то текст для заголовка 
        Какой то текст для загоКакой то текст для заголовка 
        Какой то текст для заго`
    };

    const { title, content } = accordionData;

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
                                title={ title } 
                                content={ content } 
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FaqsMenu;
