import React from 'react';
import ItemList from '../../components/ItemListContainer/ItemList/ItemList';
import Categories from '../Categories';


const Home = () => {
    return (
        <div>
            <Categories/>
           <h1>Todos los productos</h1>
           <ItemList></ItemList>
        </div>
    )
}

export default Home;
