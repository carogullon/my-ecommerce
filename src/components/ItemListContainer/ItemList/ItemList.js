import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ItemData from '../../../assets/data.json';
import {Link} from 'react-router-dom';

import './ItemList.css';



const ItemList = () => {
    const [items, setItems] = useState ([]);
    

    useEffect( ()=>{
            const promList = new Promise (resolve => resolve(ItemData));
            promList.then((response) => setItems(response));
        }, []);
        
    return (
        <div className="itemsList">
            {items.map((item)=> {
                return (
                    <div key = {item.id}>
                        <Link to={`/detail/${item.id}`}>
                            <Item item={item} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

export default ItemList;
