import React , { Component } from 'react'
import { connect } from 'react-redux'
import { removeProductFromCart } from '../actions'
import './cart.css'

class Cart extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="cart">
          {this.props.cart.length < 1 && <p>oop ... no product in cart</p>}
          <ul>
            {this.props.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={() => this.props.removeProductFromCart(cartItem.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
     removeProductFromCart: id => dispatch(removeProductFromCart(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
