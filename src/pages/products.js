import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProductToCart } from '../actions'
import './products.css'

class Products extends Component{
    render() {
      console.log(this.props);
      return (
         <div className="products">
            <ul>
              {this.props.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button onClick={() =>  this.props.addProductToCart(product)}>
                      Add to Cart
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
    products: state.products,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: product => dispatch(addProductToCart(product))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Products)
