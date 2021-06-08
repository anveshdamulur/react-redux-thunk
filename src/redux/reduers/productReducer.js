import {Action_Types} from "../constants/actionTypes";

const initialState =  {
  products : [] 
};

export const fetchProductReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case Action_Types.SET_PRODUCTS:
            return {
                ...state, products : payload
            }
        case Action_Types.FETCH_API_PRODUCTS:
                return {
                    ...state, products : payload
                }
        default:
            return state;
    }
}


export const fetchSelectedProductReducer = (state = {} , {type, payload}) =>{
    switch(type){
        case Action_Types.FETCH_SELECTED_PRODUCT:
            return {
                ...state , ...payload
            }
        case Action_Types.DELETE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}