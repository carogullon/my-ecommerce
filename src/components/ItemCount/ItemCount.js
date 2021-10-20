import React from 'react';
import { useState } from 'react'; 
import './ItemCount.css';

const ItemCount = (props) => {
        
    const [counter, setCounter]= useState(parseInt(props.initial));
    const [stock, setStock]=useState(parseInt(props.stock));
        
        const incrementar = () => {
            if (counter < stock){
                setCounter  (counter +1)
            }
        };
        const decrementar = () => {
            if (counter > 1){
                setCounter (counter -1)
            }
        };

    return (
        <div>
            <div className="contador">
                <button onClick={decrementar} className="botonContador">-</button>
                <h3 className="numeroContador">{counter}</h3>
                <button onClick={incrementar} className="botonContador">+</button>
            </div>
            <div>
                <button onClick={()=> props.onClick(counter)}>Agregar {" "} </button>
            </div>
        </div>
    
    );
};

export default ItemCount;
