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
                            <p className="current-news__date">20 Марта 2021</p>
                        </div>
                        <h1 className="current-news__general-title">Название события</h1>
                        <p className="current-news__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam, maxime nisi voluptatibus animi eveniet repellat
                            esse culpa ad ipsum velit dolor quia accusamus quidem,
                            totam repellendus corporis laborum nulla nostrum repudiandae
                            blanditiis illo tenetur perspiciatis. Adipisci, voluptates?
                            Velit, similique reiciendis consequuntur incidunt labore
                            soluta impedit. Repudiandae soluta ullam quo veritatis.
                        </p>
                    </div>
                </Popup>         
            } 
        </div>
    );
};

export default News;