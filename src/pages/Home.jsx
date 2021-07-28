import React, { Suspense } from 'react';

import { PhotoBooths } from '../components';

const FaqsMenu = React.lazy(() => import('../components/FaqsMenu'));
const News = React.lazy(() => import('../components/News'));

const Home = () => {
    return (
        <div className="content">
            <div className="container">
                <PhotoBooths />
                <Suspense fallback={ <div>Загрузка...</div> }>
                    <FaqsMenu />
                    <News />
                </Suspense>
            </div>
        </div>
    );
};

export default Home;