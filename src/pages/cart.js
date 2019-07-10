import React , { Component } from 'react'
import { ShopContext } from '../context/shop-context'


import './cart.css'

class Cart extends Component {
  render() {
    return (

      <ShopContext.Consumer>
          { context => {
            const { cart, removeProductFromCart} = context
            return (
              <div className="cart">
                  { cart.length < 1 && <p>oop ... no product in cart</p>}
                  <ul>
                    {cart.map(cartItem => (
                      <li key={cartItem.id}>
                        <div>
                          <strong>{cartItem.title}</strong> - ${cartItem.price} (
                          {cartItem.quanity})
                        </div>
                        <div>
                          <button
                            onClick={() => removeProductFromCart(cartItem.id)}
                          >
                            Remove from Cart
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
              </div>
            )
          }}
      </ShopContext.Consumer>
    )
  }
}




export default Cart
