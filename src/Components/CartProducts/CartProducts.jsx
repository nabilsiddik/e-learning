import React, { useContext } from 'react'
import { shopContext } from '../../Contexts/ShopContext/ShopContext'
import CartProduct from '../CartProduct/CartProduct'

const CartProducts = () => {

    const {cart} = useContext(shopContext)

  return (
    <div>
      {cart.map((cartItem) => {
            return <CartProduct key={cartItem.id} cartItem = {cartItem}/>
      })} 
    </div>
  )
}

export default CartProducts
