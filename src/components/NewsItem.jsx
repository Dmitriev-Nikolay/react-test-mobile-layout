import React from 'react';

import { LoadableImage } from '../components';

import news from '../assets/img/news.jpg';

const NewsItem = React.memo((props) => {
    const { type, title, desc, date, newsNumber, clickForView } = props;

    const view = () => {
        clickForView();
        document.body.style.overflow = "hidden"; // do not scroll the body
    };

    const classStyles = {
        containerImg: 'container-img-news',
        containerImgLoaded: 'container-img-news--loaded',
        img: 'news-img',
        imgLoaded: 'news-img--loaded',
    };

    return (
        <div className="news-item" onClick={ view } alt="news">
            <LoadableImage src={ news } alt="news" width="328" height="328" classStyles={ classStyles }/>
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