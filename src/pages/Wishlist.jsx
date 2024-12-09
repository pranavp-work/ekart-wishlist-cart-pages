import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
  return (
    <>
    <div className='pt-40'>
      <h2 className='text-center text-4xl mb-4 text-violet-900'>Wishlist</h2>
            <div className="lg:py-40 lg:px-40 md:py-32 md:px-32 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-32">
              <div className="p-3 rounded shadow-lg sm:mt-2 mt-4">
                <img src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/103/964/746/original/1372257_01.jpg.jpeg?action=crop&width=600" alt="sneakerOne" className='w-60 h-40'/>
                <h4 className='text-center mt-2 text-xl'><strong>Model Name</strong></h4>
                <p className='text-pretty'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos atque vero doloremque magnam vitae voluptatibus ipsa eius explicabo officiis!</p>
                <p><strong>Price: </strong><span><strong>₹24000</strong></span></p>
                <div className='flex justify-between mt-2'>
                  <button className='rounded py-2 px-3' style={{backgroundColor: "#ff0000",}}><FontAwesomeIcon icon={faHeart} className='text-slate-50' /></button>
                  <button className='rounded py-2 px-3' style={{backgroundColor: "#00ff00",}}><FontAwesomeIcon icon={faCartShopping} className='text-slate-50' /></button>
                </div>
              </div>
              <div className="p-3 shadow-lg rounded sm:mt-2 mt-4">
                <img src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/105/545/601/original/1373134_01.jpg.jpeg?action=crop&width=600" alt="sneakerOne" className='w-60 h-40'/>
                <h4 className='text-center mt-2 text-xl'><strong>Model Name</strong></h4>
                <p className='text-pretty'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos atque vero doloremque magnam vitae voluptatibus ipsa eius explicabo officiis!</p>
                <p><strong>Price: </strong><span><strong>₹24000</strong></span></p>
                <div className='flex justify-between mt-2'>
                  <button className='rounded py-2 px-3' style={{backgroundColor: "#ff0000",}}><FontAwesomeIcon icon={faHeart} className='text-slate-50' /></button>
                  <button className='rounded py-2 px-3' style={{backgroundColor: "#00ff00",}}><FontAwesomeIcon icon={faCartShopping} className='text-slate-50' /></button>
                </div>
              </div>
              <div className="p-3 shadow-lg rounded sm:mt-2 mt-4">
                <img src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/104/574/790/original/1381901_01.jpg.jpeg?action=crop&width=600" alt="sneakerOne" className='w-60 h-40'/>
                <h4 className='text-center mt-2 text-xl'><strong>Model Name</strong></h4>
                <p className='text-pretty'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos atque vero doloremque magnam vitae voluptatibus ipsa eius explicabo officiis!</p>
                <p><strong>Price: </strong><span><strong>₹24000</strong></span></p>
                <div className='flex justify-between mt-2'>
                  <button className='rounded py-2 px-3' style={{backgroundColor: "#ff0000",}}><FontAwesomeIcon icon={faHeart} className='text-slate-50' /></button>
                  <button className='rounded py-2 px-3' style={{backgroundColor: "#00ff00",}}><FontAwesomeIcon icon={faCartShopping} className='text-slate-50' /></button>
                </div>
              </div>
              <div className="p-3 shadow-lg rounded sm:mt-2 mt-4">
                <img src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/102/499/103/original/1334510_01.jpg.jpeg?action=crop&width=600" alt="sneakerOne" className='w-60 h-40'/>
                <h4 className='text-center mt-2 text-xl'><strong>Model Name</strong></h4>
                <p className='text-pretty'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos atque vero doloremque magnam vitae voluptatibus ipsa eius explicabo officiis!</p>
                <p><strong>Price: </strong><span><strong>₹24000</strong></span></p>
                <div className='flex justify-between mt-2'>
                  <button className='rounded py-2 px-3' style={{backgroundColor: "#ff0000",}}><FontAwesomeIcon icon={faHeart} className='text-slate-50' /></button>
                  <button className='rounded py-2 px-3' style={{backgroundColor: "#00ff00",}}><FontAwesomeIcon icon={faCartShopping} className='text-slate-50' /></button>
                </div>
              </div>
            </div>
    </div>

    <div className='flex justify-center items-center'>
      <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="your-wishlist-is-Empty" />
    </div>
    </>
  )
}

export default Wishlist