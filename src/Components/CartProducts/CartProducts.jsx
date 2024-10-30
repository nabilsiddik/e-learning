import React, { useContext } from 'react'
import { shopContext } from '../../Contexts/ShopContext/ShopContext'
import CartProduct from '../CartProduct/CartProduct'

const CartProducts = () => {

    const {cart} = useContext(shopContext)

  return (
    <div>
      {cart.length > 0 ?

        cart.map((cartItem) => {
            return <CartProduct key={cartItem.id} cartItem = {cartItem}/>
        })

      : 
        <h1 className='font-bold text-center text-2xl'>Cart Is Empty</h1>
      }
    </div>
  )
}

export default CartProducts
