import React from 'react';

import news from '../assets/img/news.jpg';

const NewsItem = React.memo((props) => {
    const { type, title, desc, date, newsNumber, clickForView } = props;

    const view = () => {
        clickForView();
        document.body.style.overflow = "hidden"; // do not scroll the body
    };

    return (
        <div className="news-item" onClick={ view }>
            <img className="news-item__img" src={ news } alt="news" width="328" height="328"/>
            <div className="news-item__info-block">
                <h6 className="news-item__type">{ type }</h6>
                <p className="news-item__title">{ title } № { newsNumber }</p>
                <p className="news-item__desc">{ desc }</p>
                <p className="news-item__date">{ date }</p>
            </div>
        </div>
    );
});

export default NewsItem;