// we will be passing the payload and the action that we are getting

import { ACTION_TYPE } from "../types/Actiontype"

export const addToCart=(product)=>{
    return{
        type:ACTION_TYPE.ADD_TO_CART,
        payload: product
    }

}

export const removeFromCart = (id) => {
    return {
        type:ACTION_TYPE.REMOVE_FROM_CART,
        payload:id
    }
}