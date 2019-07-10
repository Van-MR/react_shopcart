import { ADD_PRODUCT_TO_CART, REMOVE_Product_FROM_CART } from '../types'

export const addProductToCart = product => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
    }, 700);
  };
};


export const removeProductFromCart = (productID) => dispatch => {
    dispatch({
      type: REMOVE_Product_FROM_CART,
      payload: productID
    })
}
