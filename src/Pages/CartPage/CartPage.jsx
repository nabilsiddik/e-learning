import React from 'react'
import CartProducts from '../../Components/CartProducts/CartProducts'
import CartCalculation from '../../Components/CartCalculation/CartCalculation'

const CartPage = () => {
  return (
    <div id='cart_page' className='py-5'>
      <div className="container">
        <h1 className='text-center font-bold text-4xl'>Your Cart</h1>

        <div className="cart_container flex gap-5 mt-5">
            <div className="cart_products w-[60%]">
                <CartProducts/>
            </div>
            <div className="cart_calculations w-[40%]">
                <CartCalculation/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
