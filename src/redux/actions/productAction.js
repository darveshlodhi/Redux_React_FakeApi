import { ActionType } from "../contants/action-types"

export const setproducts = (products)=> {
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products,
    };
};

export const selectedProduct = (product) => {
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product,
    };
};