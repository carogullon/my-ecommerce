import React from 'react';
import ItemList from '../../components/ItemListContainer/ItemList/ItemList';
import Categories from '../Categories';


const Home = () => {
    return (
        <div>
            <Categories/>
           <ItemList></ItemList>
        </div>
    )
}

export default Home;
