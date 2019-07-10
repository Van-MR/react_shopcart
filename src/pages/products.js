import React from 'react'
import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shop-context'
import './products.css'

const Products = props => {
    const contetx = useContext(ShopContext)

     useEffect(() => {
       console.log(contetx);
     })

      return (
        <ShopContext.Consumer>
           { context => {
              const { products, addProductToCart } =  context
              return (
                <div className="products">
                   <ul>
                     {products.map(product => (
                       <li key={product.id}>
                         <div>
                           <strong>{product.title}</strong> - ${product.price}
                         </div>
                         <div>
                           <button onClick={() => addProductToCart(product)}>
                             Add to Cart
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


export default Products
