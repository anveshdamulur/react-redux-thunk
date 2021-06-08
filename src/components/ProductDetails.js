import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { deleteSelectedProduct, fetchSelectedProduct, selectedProduct } from '../redux/actions/productsAction';

const ProductDetails = () => {
    const product = useSelector(state => state.fetchProduct);
    const {id} = useParams();
    const dispatch =useDispatch();
 
    useEffect(()=>{
       if(product && product !== "") dispatch(fetchSelectedProduct(id));
        return(() =>{
            dispatch(deleteSelectedProduct())
        })
    }, [id])

    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div>
                    ...loading
                </div>
            ): (
                <div className="title">
                    {product.title}
                </div>
            )}
        </div>
    )
}

export default ProductDetails
