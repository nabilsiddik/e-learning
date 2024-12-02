import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { shopContext } from '../../Contexts/ShopContext/ShopContext';
import { courseContext } from '../../Contexts/CourseContext/CourseContext';


const CartProduct = ({cartItem}) => {

    const {_id, thumbnailUrl, title, regularPrice, discountedPrice} = cartItem
    const {cart,setCart} = useContext(shopContext)
    const {allCourses, setAllCourses} = useContext(courseContext)

    // Delete Cart Item
    const handleDeleteCartProduct = (id) => {
        
    }

  return (
    <div id='cartItem' className='flex items-center justify-between gap-3 border py-2 px-2 rounded-md mb-3'>
        <div className='flex items-center gap-3'>
            <div className="cart_item_image">
                <img className='w-[130px] rounded-md' src={thumbnailUrl} alt={title} />
            </div>
            <div className="cart_item_info">
                <h3 className='font-bold text-lg'>{title}</h3>
                <p>${discountedPrice}</p>
            </div>
        </div>
        <div className='text-2xl text-red-600 cursor-pointer'>
            <MdDeleteForever onClick={()=> handleDeleteCartProduct(id)} />
        </div>
    </div>
  )
}

export default CartProduct
