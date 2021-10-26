import React, { useContext, useState } from 'react';
import { Card,  Image } from 'semantic-ui-react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {ItemsContext} from '../Context/ItemsContext';


const ItemDetail = ({producto}) => {


    const [compra, setCompra] = useState();
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const { addItem } = useContext(ItemsContext);

    const onAdd = (cantidad) =>{
        setCompra(cantidad);
        setFinalizarCompra(!finalizarCompra);
       
        if(cantidad > 0){
            addItem(producto, cantidad)
        }
    }
    console.log("llego" + compra)



    return(
        <div className="itemDetail">
                <Card key={producto.id}>
                    <Image src={producto.img} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{producto.name}</Card.Header>
                        <Card.Meta>{producto.id}</Card.Meta>
                        <Card.Description>{producto.description}</Card.Description>
                    </Card.Content>
                    {
                        finalizarCompra ? 
                        ( <Link to={`/cart`}><button>Finalizar Compra</button></Link>

                        ): (
                            <ItemCount 
                            stock="5" 
                            initial={1}  
                            onClick= { (cant)=> onAdd(cant) }>
                            </ItemCount>    
                        )}
                </Card>
              
        </div> 
  
    )
}

export default ItemDetail;
