import React, { useContext, useState } from 'react'
import { shopContext } from '../../Contexts/ShopContext/ShopContext'

const CartCalculation = () => {

    const {cart} = useContext(shopContext)

    // Get Total amount
    const getTotalAmount = (cart) => {
        return cart.reduce((acc, curr) => {
            return acc + curr.discounted_price
        }, 0)
    }
    

    // Calculate Coupon
    const calculateCouponAmount = (couponType, couponAmount, totalAmount) => {
        let amountAfterCoupon = 0
        if(cart.length > 0){
            if(couponType === 'percentage'){
                return ((totalAmount * couponAmount) / 100)
            }else if(couponType === 'flat'){
                return (totalAmount - (totalAmount - couponAmount))
            }
        }else{
            return amountAfterCoupon = 0
        }
    }

  return (
    <div id='cart_calculation' className='border py-4 px-3'>
      <div className="product_list border-b">
        {cart.map((cartItem, index) => 
            <ul key={index}>
                <li className='flex items-center justify-between gap-3 mb-2 font-bold'>
                    <span>{cartItem.title}</span>
                    <span>${cartItem.discounted_price}</span>
                </li>
            </ul>
        )}
      </div>

      <div className="subtotal flex items-center justify-between mt-3">
        <h3 className='font-bold text-lg'>Total: </h3>
        <h3 className='font-bold text-lg'>${getTotalAmount(cart)}</h3>
      </div>

      <div className="discount flex items-center justify-between mt-3 border-b">
        <h3 className='font-bold text-lg'>Discount: </h3>
        <h3 className='font-bold text-lg'>${calculateCouponAmount('percentage', 30, getTotalAmount(cart))}</h3>
      </div>

      <div className="subtotal flex items-center justify-between mt-3">
        <h3 className='font-bold text-lg'>SubTotal: </h3>
        <h3 className='font-bold text-lg'>${getTotalAmount(cart) - calculateCouponAmount('percentage', 30, getTotalAmount(cart))}</h3>
      </div>

      <button className='btn btn-success text-white  font-bold text-lg w-full mt-8'>Checkout Now</button>
    </div>
  )
}

export default CartCalculation
