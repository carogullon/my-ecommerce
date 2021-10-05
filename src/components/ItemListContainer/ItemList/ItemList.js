import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ItemData from '../../../assets/data.json';

import './ItemList.css';

const ItemList = () => {
    const [items, setItems] = useState ([]);
    console.log(items);
    

    useEffect( ()=>{
            const promList = new Promise ((resolve) =>{
                setTimeout (()=>{
                    resolve(ItemData);
                },2000);
            });

            promList.then((response) => {
                setItems(response);
            });
        }, []);
        
    return (
        <div className="itemsList">
            {items.map((item)=> {
                return (
                <Item item={item} key={item.id} />
                )
            })}
        </div>
    )
};

export default ItemList;
