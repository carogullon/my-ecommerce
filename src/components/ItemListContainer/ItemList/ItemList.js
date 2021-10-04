import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const [items, setItems] = useState ([]);
    console.log(items);
    

    useEffect( ()=>{
        setTimeout(()=>{
            fetch("src/components/assets/data.json")
                .then((response) => response.json())
                .then((data) => setItems(data))
        },2000);
    }, []);

    return (
        <div>
            <h2>Productos</h2>
            {items.map((item)=> {
                <Item data = {item} />
            })}
        </div>
    )
}

export default ItemList;
