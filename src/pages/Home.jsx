import React from 'react';

import { PhotoBooths } from '../components';
import { FaqsBlock } from '../components';

const Home = React.memo(() => {

    return (

        <div className="content">
            <div className="container">
                <h1>Фотобудки</h1>
                <PhotoBooths />
                <FaqsBlock />
            </div>
        </div>
    );
});

export default Home;