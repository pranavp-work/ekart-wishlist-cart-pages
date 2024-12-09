import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
    <div className="pt-40 md:px-10 sm:px-2 ">
      <h2 className='text-center text-4xl mb-4 text-violet-900'>Cart</h2>
      <div className='grid md:grid-cols-[repeat(1,3fr)_repeat(1,2fr)] md:p-10 p-2'>
        <div className="table md:p-10 p-5">
          <table className='border w-full'> 
            <thead>
              <tr className='bg-slate-400'>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'>1</td>
                <td className='text-center'>Model Name</td>
                <td className='flex justify-center'><img src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/103/964/746/original/1372257_01.jpg.jpeg?action=crop&width=600" alt="no-image" className='w-24 h-16' /></td>
                <td className='text-center'>20000</td>
                <td className='text-center'><button><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-10">
          <div className='shadow-xl p-5'>
            <h2 className='text-center text-xl mb-2'>Cart Summary</h2>
            <p>Total number of products: <span>3</span></p>
            <p>Grand Total: <span>20000</span></p>
            <button className='bg-green-700 text-slate-50 w-full mt-2 p-2'>Checkout</button>
          </div>
          
        </div>

      </div>
    </div>

    <div className='flex justify-center items-center my-12 flex-col'>
      <img src="https://mycarrom.com/empty-cart.png" alt="your-cart-is-Empty" />
      <Link to = {'/'}><button className='bg-green-800 text-slate-50 w-60 p-3 mt-10 hover:border hover:border-green-800 hover:text-green-800 hover:bg-slate-50'>Go back home</button></Link>
    </div>
    
    </>
  )
}

export default Cart