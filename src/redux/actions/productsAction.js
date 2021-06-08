import { fakeStoreApi } from "../../apis/fakeStoreApi";
import {Action_Types} from "../constants/actionTypes";


export const fetchApiProducts = () => async(dispatch) => {
        const response = await fakeStoreApi.get("/products");
        dispatch({
            type : Action_Types.FETCH_API_PRODUCTS,
            payload : response.data
        })
    }
   
    export const fetchSelectedProduct = (id) => async(dispatch) =>{
        const response = await fakeStoreApi.get(`/products/${id}`);

        dispatch({
            type : Action_Types.FETCH_SELECTED_PRODUCT,
            payload : response.data
        })
    }


export const deleteSelectedProduct = () =>{
    return {
        type : Action_Types.DELETE_SELECTED_PRODUCT
    }
}