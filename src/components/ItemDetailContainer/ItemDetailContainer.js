import React from 'react';
import ItemsData from '../../assets/data.json';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';

const ItemDetailContainer = ({match}) => {
    console.log("MATCH", match)
    let ItemId = match.params.id;

    const [item, setItem] = useState ([]);

    useEffect(() => {
        const getData = new Promise ((response) => {
           response (ItemsData.filter(producto => producto.id == ItemId));
        }) ;
        getData.then((data) => {
            setItem (data);
        })
    },[ItemId]) ;
  
    return (
        <div className="ItemDetailContainer">
                {item.map((producto)=> {
                return (
                    <ItemDetail producto={producto}/>
                    
                )
            } 
            )}            
        </div>
    )
}

export default ItemDetailContainer;
