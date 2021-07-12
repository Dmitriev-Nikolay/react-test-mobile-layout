import React from 'react';

import { FotoCard } from '../components';

const nameCategories = ['Мясные', 'Экзотические', 'Куриные', 'Сырные', 'Рыбные'];
const nameSort = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
];

const Home = React.memo(() => {
    // const { isLoaded, burgers, sortBy, category, cartItems } = useSelector(state => { // mapState
    //     return {
    //         isLoaded: state.burgersReducer.isLoaded,
    //         burgers: state.burgersReducer.items,
    //         cartItems: state.cartReducer.items,
    //         sortBy: state.filtersReducer.sortBy,
    //         category: state.filtersReducer.category,
    //     };
    // });

    return (
        <div className="container">
            {/* <div className="content__top">
                <Categories
                    activeCategory={ category }
                    burgerCategories={ nameCategories }
                    onClickCategory={ onSelectCategory }
                />
                <SortPopUp 
                    sortCategories={ nameSort }
                    activeSort={ sortBy }
                    onClickSort={ onSelectSort }
                />
            </div>
            <h2 className="content__title">Все бургеры</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? burgers.map((burger, i) => {
                            return (
                                <BurgerCard
                                    key={ `${ burger.id }_${ i }` }
                                    { ...burger }
                                    burgerCountInСart={ 
                                        Object.values(cartItems).flat(1).filter(el => el.id === burger.id).length 
                                        ? Object.values(cartItems).flat(1).filter(el => el.id === burger.id).length 
                                        : null
                                    }
                                    onClickAddBurger={ addItemToCart }
                                />
                            )
                        })
                        : Array.from(Array(12), (_, i) => <BurgerCardLoading key={ i } />)
                }
            </div> */}
        </div>
    );
});

export default Home;