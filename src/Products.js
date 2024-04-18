import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Products = ()=> {
    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] =  useState([]);

    const getDataProducts = async()=> {
        const response = await fetch(url);
        const dataProduct = await response.json();
        setProducts(dataProduct);
        console.log(products);
    }
    useEffect( ()=> {
        getDataProducts();
    })


    return (
        <div className="container">
            <div className="row">
            <h1><center>My Products</center></h1>
            { products.map((produk)=> {
                return(
                <div className="col-3"><CardProduct
                key={produk.id}
                title={produk.title} 
                price={produk.price}
                description={produk.description}
                image={produk.image}
                />
                </div> )}
            )
            }
            </div>
        </div>
    )
}

function CardProduct(props ) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
            <p>Price : {props.price}$</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }

export default Products;