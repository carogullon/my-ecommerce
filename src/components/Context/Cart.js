import React, {useContext} from 'react'
import { ItemsContext } from './ItemsContext';
import { Card, Image } from 'semantic-ui-react'

const Cart = () => {
    const [productos, setProductos, clearState, addItem, removeItem]=useContext(ItemsContext)
    return (
        <div> 
            <h2>Resumen de compra:</h2>
            <button onClick={removeItem}>Eliminar Item</button>
            <button onClick={clearState}>Limpiar Carrito</button>
        </div>
    )
    
}

export default Cart

