import { combineReducers } from "redux";
import {fetchProductReducer, fetchSelectedProductReducer} from "../reduers/productReducer"
const reducer = combineReducers({
    fetchProducts : fetchProductReducer,
    fetchProduct : fetchSelectedProductReducer
})

export default reducer;