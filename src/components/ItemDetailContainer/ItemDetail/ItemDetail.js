import React, { useState } from 'react';
import { Card,  Image } from 'semantic-ui-react';
import './ItemDetail.css';
import ItemCount from '../../ItemCount/ItemCount';
import {Link} from 'react-router-dom';


const ItemDetail = (props) => {


    const [compra, setCompra] = useState();

    const [finalizarCompra, setFinalizarCompra] = useState(false);

    const onAdd = (cantidad) =>{
        setCompra(cantidad);
        setFinalizarCompra(!finalizarCompra);
    }
    console.log("llego" + compra)



    return(
        <div className="itemDetail">
                <Card key={props.producto.id}>
                    <Image src={props.producto.img} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{props.producto.name}</Card.Header>
                        <Card.Meta>{props.producto.id}</Card.Meta>
                        <Card.Description>{props.producto.description}</Card.Description>
                        <Card.Content>${props.producto.precio}</Card.Content>
                    </Card.Content>
                    {
                        finalizarCompra ? 
                        ( <Link to={`/cart`}><button>Finalizar Compra</button></Link>

                        ): (
                            <ItemCount 
                            stock="5" 
                            initial="1"  
                            onClick= { (cant)=> onAdd(cant) }>
                            </ItemCount>    
                        )}
                </Card>
              
        </div> 
  
    )
}

export default ItemDetail;
