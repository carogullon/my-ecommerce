import React, { useState, useEffect } from 'react';
import ItemsData from '../../assets/data.json';
import { Card, Image } from 'semantic-ui-react';
import {Link, useParams} from 'react-router-dom';
import Categories from '../../views/Categories';
import './Seccion.css';

const Seccion = ({}) => {

    const {categoryId} = useParams();
    const [seccion, setSeccion] = useState ([]);

    useEffect(() => {
        const getSeccion = new Promise ((response) => {
           response (ItemsData.filter((e) => e.category === categoryId));
        }) ;
        getSeccion.then((data) => {
            console.log(data, "data")
            setSeccion (data);
        })
    },[categoryId]) ;
  
    return (
        <div>
        <Categories />
        {seccion.map((producto)=>{
            
            return (
                <div className="Seccion" >
                    <Link to={`/detail/${producto.category}`}>
                        <Card  >
                            <Image src={producto.img} wrapped ui={false}/>
                            <Card.Content>
                            <Card.Header> {producto.name} </Card.Header>
                            <Card.Meta> {producto.id} </Card.Meta>
                            <Card.Description>{producto.description}</Card.Description>
                            <Card.Content>${producto.precio}</Card.Content>
                        </Card.Content>
                    </Card>
                    </Link>
                </div>
            )
        }
        )}
    </div>
    )
}

export default Seccion