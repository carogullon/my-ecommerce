import React from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter]=React.useState(parseInt(initial));
    const incrementar = () => {
        if (counter < stock){
            setCounter (counter +1)
        }
    };
    const decrementar = () => {
        if (counter > 1){
            setCounter (counter -1)
        }
        
    };
    return (
        <div className="contador">
            <h2>Contador</h2>
        
            <div className="botonContador">
                <button onClick={incrementar}>+</button>
                <h3 className="numeroContador">{counter}</h3>
                <button onClick={decrementar}>-</button>
            </div>
        </div>
            
       
    )
}

export default ItemCount;
