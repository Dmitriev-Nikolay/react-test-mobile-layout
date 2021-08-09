import React from 'react';

import news from '../assets/img/news.webp';

const NewsItem = React.memo(({ type, title, desc, date, newsNumber, clickForView }) => {

    const view = () => {
        clickForView();
        document.body.style.overflow = "hidden"; // do not scroll the body
    };

    return (
        <div className="news-item" onClick={ view } alt="news">
            <div className="container-img-news">
                <img className="container-img-news" src={ news } alt="news" width="328" height="328"/>
            </div>
            <div className="news-item__info-block">
                <h6 className="news-item__type">{ type }</h6>
                <p className="news-item__title">{ title } № { newsNumber }</p>
                <p className="news-item__desc">{ desc }</p>
                <time className="news-item__date">{ date }</time>
            </div>
        </div>
    );
});

export default NewsItem;