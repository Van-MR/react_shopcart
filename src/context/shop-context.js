import React, { createContext, Component }from 'react'

export const ShopContext = createContext()

class ShopContextProvider extends Component {
  state = {
   products: [
     { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
     { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
     { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
     { id: 'p4', title: 'Half-dried plant', price: 2.99 }
   ],
   cart: []
  };

  addProductToCart = product => {
     const updatedCart = [...this.state.cart]
     const updatedItemIndex = updatedCart.findIndex( item => item.id === product.id)

     if(updatedItemIndex < 0) {
        updatedCart.push({...product,quanity: 1})
     } else {
       const updatedItem = {...updatedCart[updatedItemIndex]}
       updatedItem.quanity++
       updatedCart[updatedItemIndex] = updatedItem
     }

     setTimeout(() => {
       this.setState({cart:updatedCart})
     },700)
  }

  removeProductFromCart = productId => {
    const updatedCart = [...this.state.cart]
    const updatedItemIndex = updatedCart.findIndex( item => item.id === productId)
    const updatedItem = {...updatedCart[updatedItemIndex]}
    updatedItem.quanity--
    if(updatedItem.quanity <= 0) {
       updatedCart.splice(updatedItemIndex,1)
    } else {
      updatedCart[updatedItemIndex] = updatedItem
    }

    setTimeout(() => {
      this.setState({cart: updatedCart})
    },700)
  }


  render() {
    return (
       <ShopContext.Provider
         value={{
           ...this.state,
           addProductToCart:this.addProductToCart,
           removeProductFromCart:this.removeProductFromCart
         }}
         >
            {this.props.children}
       </ShopContext.Provider>
    )
  }
}

export default ShopContextProvider
