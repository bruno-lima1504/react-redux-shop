import CartActionTypes from "./action-types";

export const addProductsToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductsFromCarts = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
})

export const increseProductsQuantity = (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
})

export const decreaseProductsQuantity = (payload) => ({
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload,
})