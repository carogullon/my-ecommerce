import React from 'react';
import { Card,  Image } from 'semantic-ui-react';
import './Item.css'


const Item = ({item}) => {
    const {id, img, name, precio, description} = item;
    return (
        <Card className="card">
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span>{id}</span>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content>${precio}</Card.Content>
        </Card>
    )
};

export default Item;