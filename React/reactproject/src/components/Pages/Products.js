import React from 'react';
import '../../App.css';
import '../Products/products.css'
import ProductShown from '../Products/ProductShown';

function Products(){
    return(
        <div className="productPage">
            <div className="product__container">
                <img className ="product__image" src="./images/Medical.jpg" alt=""/>

                <div className="product__row">
                    <ProductShown 
                    title='item 1 testing'
                    price={150}
                    image="./images/test.jpg"
                    />
                    <ProductShown 
                     title='item 2 testing'
                     price={400}
                     image="./images/masks.jpg"/>
                    
                </div>

                <div className="product__row">
                <ProductShown 
                 title='item 3 testing'
                 price={29}
                 image="./images/oxygentube.jpg"/>
                <ProductShown 
                 title='item 4 testing'
                 price={40}
                 image="./images/Piils.jpg"/>
                <ProductShown 
                 title='item 5 testing'
                 price={215}
                 image="./images/question.jpg"/>
                </div>

                <div className="product__row">
                <ProductShown 
                 title='item 6 testing'
                 price={300}
                 image="./images/wheelchair.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Products;