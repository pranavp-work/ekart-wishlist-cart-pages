import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import userFetch from './../hooks/userFetch';
import { useDispatch } from 'react-redux';
import { addWishlistItems } from '../redux/slices/wishlistSlice';
import { addCartItems } from '../redux/slices/cartSlice';


function Home() {

  const data = userFetch('https://fakestoreapi.com/products');
  console.log(data);

  const dispatch = useDispatch();


  return (
    <>
      <div className="lg:py-40 lg:px-40 md:py-32 md:px-32 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-32">
        {data?.length > 0 &&

          data?.map((item) => (
            <div className="p-3 rounded shadow-lg sm:mt-2 mt-4">
              <img src={item.image} alt="sneakerOne" className='w-60 h-40' />
              <h4 className='text-center mt-2 text-xl'><strong>{item.title.slice(0, 20)}</strong></h4>
              <p className='text-pretty'>{ item.description.slice(0, 60) }</p>
              <p><strong>Price: </strong><span><strong>${item.price}</strong></span></p>
              <div className='flex justify-between mt-2'>
                <button onClick={()=>dispatch(addWishlistItems(item))} className='rounded py-2 px-3' style={{ backgroundColor: "#ff0000", }}><FontAwesomeIcon icon={faHeart} className='text-slate-50' /></button>
                <button onClick={() =>dispatch(addCartItems(item))} className='rounded py-2 px-3' style={{ backgroundColor: "#00ff00", }}><FontAwesomeIcon icon={faCartShopping} className='text-slate-50' /></button>
              </div>
            </div>
          ))

        }
      </div>
    </>
  )
}

export default Home