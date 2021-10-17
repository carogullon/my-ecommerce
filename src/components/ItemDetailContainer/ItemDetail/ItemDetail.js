import React from 'react';
import { Card,  Image } from 'semantic-ui-react';
import './ItemDetail.css';


const ItemDetail = ({producto}) => {
    const {id, img, name, description, precio} = producto;
    return(
        <div className="itemDetail">
                <Card key={producto.id}>
                    <Image src={img} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>{id}</Card.Meta>
                        <Card.Description>{description}</Card.Description>
                        <Card.Content>${precio}</Card.Content>
                    </Card.Content>
                </Card>
        </div> 
  
    )
}

export default ItemDetail;
