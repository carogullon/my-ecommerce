import React from 'react';

const Item = ( {data} ) => {
    return (
        
        <div>
            <h4>{data.name}</h4>
            <img src={data.img}></img>
            <p>{data.precio}</p>
        </div>    
    )
};

export default Item;
