import React from 'react';

import { NewsItem, Popup, Sliders } from '../components';

import data from '../data.js';

const News = () => {
    const [showMoreNews, setShowMoreNews] = React.useState(data.allNews.visibleAmountOfNews); // 3 default
    const [visibleCurrentNews, setVisibleCurentNews] = React.useState(false); // default hidden

    const handleViewCurrentNews = () => setVisibleCurentNews(true) // visible on

    const handleViewMoreNews = () => setShowMoreNews(showMoreNews + 3); // +3 news

    return (
        <div className="news">
            <p className="news__why-choose-us">Почему выбирают нас?</p>
            <h1 className="news__faq">Новости</h1>
            <div className="news__items">
                {
                    data.allNews.news.slice(0, showMoreNews).map((newsItem, index) => {
                        return (
                            <NewsItem
                                key={ index + Math.random() ** 2 }
                                type={ newsItem.type }
                                title={ newsItem.title }
                                desc={ newsItem.desc }
                                date={ newsItem.date }
                                newsNumber={ index + 1 }
                                clickForView={ handleViewCurrentNews }
                            />
                        )
                    })
                }
            </div>
            {
                showMoreNews < data.allNews.news.length &&
                <button className="news__show-more-btn" onClick={ handleViewMoreNews }>Показать еще</button>
            }
            { 
                visibleCurrentNews &&
                <Popup 
                    visible={ visibleCurrentNews } 
                    setVisible={ setVisibleCurentNews }
                >
                    <Sliders sliderImgs={ data.sliderData.sliderImgsNews } className={ visibleCurrentNews ? 'image-gallery-bullets' : 'news' }/>
                    <div className="current-news">
                        <div className="current-news__block-title-date">
                            <p className="current-news__title">Фотобудка</p>
                            <time className="current-news__date">20 Марта 2021</time>
                        </div>
                        <h1 className="current-news__general-title">Название события</h1>
                        <p className="current-news__description">
                            Lorem ipsum dolor sit amet, consectetur <span className="colortext-small"> adipiscing elit</span>, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Popup>         
            }
        </div>
    );
};

export default News;