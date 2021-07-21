import React from 'react';

import { PhotoBooths, FaqsMenu, News } from '../components';

const Home = React.memo(() => {

    return (

        <div className="content">
            <div className="container">
                <PhotoBooths />
                <FaqsMenu />
                <News />
            </div>
        </div>
    );
});

export default Home;