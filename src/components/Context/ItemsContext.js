import React, {useState, useEffect, createContext} from'react';


export const ItemsContext = createContext();

export const ItemsProvider =({children})=> {
    const [productos, setProductos] = useState ([]);

    const addItem = (producto, cantidad) => {
        console.log("hola item")

        if (localStorage.getItem("ShippingCart") !== null) {
            setProductos(JSON.parse(localStorage.getItem("ShippingCart")))
        }
       
        if (productos.lenght>0){
            const productoClickeado = producto.filter((e) => e.id === producto.id)
            if (productoClickeado !== null){
                productoClickeado.cantidad += cantidad
            } else {
                const productoAgregado = {"id" : producto.id, "cantidad": cantidad}
                productos.push(productoAgregado)
            }
        } else {
            const productoNuevo = {"id": producto.id, "cantidad": cantidad}
            productos.push(productoNuevo)

        } 
        (localStorage.setItem("ShippingCart", JSON.stringify(productos)))
    }

    const removeItem = (producto) => {
        if (productos.lenght){
            const indexOf = productos.indexOf((e) => e.id === producto.id)
            if (indexOf > -1){
                productos.slice(indexOf, 1)
            } 
        } 
    }
    const clearState = () => {
        setProductos ([])
    }

    return (
        <ItemsContext.Provider value={{
            productos,
            setProductos,
            addItem,
            removeItem,
            clearState
              }}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsProvider;