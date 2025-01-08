import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItems } from '../redux/slices/wishlistSlice';

function Wishlist() {

  const wishlistArray = useSelector(state => state.wishlist);
  console.log(wishlistArray);

  const dispatch = useDispatch();


  return (
    <>
      <div className='pt-40'>
        <h2 className='text-center text-4xl mb-4 text-violet-900'>Wishlist</h2>
        <div className="lg:py-40 lg:px-40 md:py-32 md:px-32 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-32">
        {wishlistArray?.length > 0 ?

          wishlistArray?.map(item => (

              <div className="p-3 rounded shadow-lg sm:mt-2 mt-4">
                <img src={item.image} alt="sneakerOne" className='w-60 h-40' />
                <h4 className='text-center mt-2 text-xl'><strong>{ item.title.slice(0, 20) }</strong></h4>
                <p className='text-pretty'>{ item.description.slice(0, 60) }</p>
                <p><strong>Price: </strong><span><strong>${item.price}</strong></span></p>
                <div className='flex justify-between mt-2'>
                  <button onClick={()=> dispatch(removeWishlistItems(item))} className='rounded py-2 px-3' style={{ backgroundColor: "#ff0000", }}><FontAwesomeIcon icon={faTrash} className='text-slate-50' /></button>
                  <button className='rounded py-2 px-3' style={{ backgroundColor: "#00ff00", }}><FontAwesomeIcon icon={faCartShopping} className='text-slate-50' /></button>
                </div>
              </div>
          ))

          :
          <div className='flex justify-center items-center'>
            <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="your-wishlist-is-Empty" />
          </div>
          
        }
        </div>
      </div>
    </>
  )
}

export default Wishlist