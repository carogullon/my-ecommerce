import React from 'react';
import { useState } from 'react'; 
import './ItemCount.css';

const ItemCount = ({stock, initial}) => {
        
    const [counter, setCounter]= useState(parseInt(initial));
        
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

        const onAdd = () => {
            if (counter>0 && counter<5) {
                alert("La cantidad de sus productos es :" + counter)
            }else {
                alert("No hay mas stock disponible");
            }
        }
    return (
        <div>
            <div className="contador">
                <button onClick={decrementar} className="botonContador">-</button>
                <h3 className="numeroContador">{counter}</h3>
                <button onClick={incrementar} className="botonContador">+</button>
            </div>
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    
    );
};

export default ItemCount;
