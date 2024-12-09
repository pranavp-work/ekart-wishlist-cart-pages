import React from 'react'

function Cart() {
  return (
    <>
    <div className="pt-40 px-10">
      <h2 className='text-center text-4xl mb-4 text-violet-900'>Cart</h2>
      <div className='grid grid-cols-[repeat(1,3fr)_repeat(1,2fr)] p-10'>
        <div className="table p-10">
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
                <td><img src="" alt="no-image" /></td>
                <td className='text-center'>20000</td>
                <td className='text-center'><button>del</button></td>
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
    </>
  )
}

export default Cart