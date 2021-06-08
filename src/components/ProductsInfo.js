import React from 'react'
import { useSelector } from 'react-redux'
import "./ProductsInfo.css"
import {Link} from "react-router-dom";
const ProductsInfo = () => {
    const products = useSelector(state => state.fetchProducts.products);
    const productInfo = products.map((product, index) =>{
       const {id, title, image, price, category} = product;
       return(
          
                <div key={id} className="product__container">
                    <Link to={`/product/${id}`} style={{textDecoration: "none"}} >
                        <div className="product__image">
                            <img src={image} alt="image"/>
                        </div>
                        <div className="product__info">
                        
                                <div className="product__title">
                                    <font>{title}</font>
                                </div>
                                
                            <div className="product__price">
                            <p>{price} €</p>  
                            </div>
                            <div className="product__category">
                            <p>{category}</p> 
                            </div>
                        </div>
                    </Link>
                </div>
            
        )
    })
    return (
        <>
        { productInfo }
        </>
    )
}

export default ProductsInfo
