import React from 'react';
import { Card,  Image } from 'semantic-ui-react';
import ItemCount from '../../ItemCount/ItemCount';


const Item = ({item}) => {
    const {id, img, name, precio, description} = item;
    return (
        <Card className="card">
                    <Image src={img} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>{id}</Card.Meta>
                        <Card.Description>{description}</Card.Description>
                        <Card.Content>${precio}</Card.Content>
                        <ItemCount stock="5" initial="1"/>
                    </Card.Content>
        </Card>          
    )
};

export default Item;