import React, { createContext, useReducer } from 'react'
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducer';



export const ShopContext = createContext()


const ShopContextProvider = props => {
    //destruct
    const products = [
       { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
       { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
       { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
       { id: 'p4', title: 'Half-dried plant', price: 2.99 }
     ]

    const [cartState, dispatch ] = useReducer(shopReducer, { cart: [] });


    const addProductToCart = product => {
      setTimeout(() => {
         dispatch({ type: ADD_PRODUCT, product: product });
       }, 700);
    }

    const removeProductFromCart = productId => {
      setTimeout(() => {
          dispatch({ type: REMOVE_PRODUCT, productId: productId });
      }, 700);
    }


    return (
       <ShopContext.Provider
         value={{
           cart: cartState.cart,
           products:products,
           addProductToCart:addProductToCart,
           removeProductFromCart:removeProductFromCart
         }}
         >
          { props.children }
       </ShopContext.Provider>
    )
}

export default ShopContextProvider
