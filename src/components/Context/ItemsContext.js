import React, {useState, createContext} from'react';


export const ItemsContext = createContext();

export const ItemsProvider =({children})=> {
    const [cart, setCart] = useState ([]);
    const [total, setTotal] = useState(0)
    const [cantidadItem, setCantidadItem] = useState(0)


    const isInCart = (id) => {
        const item = cart.filter(p => p.item.id === id);
        if ( item.length > 0 ) {
            return true
        }
        else{
            return false
        }
    }
    function addItem(newItem, quantity) {
        const idx = cart.findIndex((listI) => listI.item.id === newItem.id)

        if (idx === -1) {
            const l = [ ...cart, { item: newItem, quantity } ]
            setCart(l)
        } else {
            const newQuantity = cart[idx].quantity + quantity;
            const oldI = cart.filter((oldI) => oldI.item.id !== cart[idx].item.id)
            const l = [...oldI, { item: cart[idx].item, quantity: newQuantity }]
            setCart(l)
        }
    }
   
    const removeItem = (elemento) => {
        const listaNew = cart.filter(p=> p.item.id != elemento.item.id)
        setCart(listaNew)
    }
    const clearCart = () => {
        setCart([])
    }
    return (
        <ItemsContext.Provider value={{
                clearCart: clearCart,
                addItem: addItem,
                cart: cart,
                serCart: setCart,
                removeItem: removeItem,
                cantidad: cart.length, }}>
            {children}
        </ItemsContext.Provider>
    )
}
