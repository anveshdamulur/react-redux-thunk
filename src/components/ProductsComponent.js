import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from "axios";
import { fetchApiProducts, setProducts } from '../redux/actions/productsAction';
import ProductsInfo from './ProductsInfo';
import "./ProductsComponent.css"
const ProductsComponent = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchApiProducts())
    }, []);

    return (
        <div className="products__component">
            <ProductsInfo />
        </div>
    )
}

export default ProductsComponent
