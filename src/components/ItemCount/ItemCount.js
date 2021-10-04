import  React, { useState } from 'react'; 
import './ItemCount.css';

const ItemCount = ({stock, initial}) => {
        const [counter, setCounter]= useState(parseInt(initial));

        const onAdd = () => {
            if (counter>0, counter<5) {
                alert("La cantidad de sus productos es :" + counter)
            }else {
                alert("No hay mas stock disponible");
            };
        };
       
        const incrementar = () => {
            if (counter < stock){
                setCounter  (counter +1)
            }
        };
        const decrementar = () => {
            if (counter > 1){
                setCounter (counter -1)
        };
    };
    return (
        <div className="contador">
            <h2>Contador</h2>
        
            <div className="botonContador">
                <button onClick={decrementar}>-</button>
                <h3 className="numeroContador">{counter}</h3>
                <button onClick={incrementar}>+</button>
                <button onClick={onAdd}>Agregar al carrito</button>
              
               
                
            </div>
        </div>
            
       
    )
}

export default ItemCount;
