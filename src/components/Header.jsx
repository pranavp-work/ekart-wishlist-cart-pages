import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

  const wishlistArray = useSelector(state => state.wishlist);
  const cartArray = useSelector(state => state.cart);
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className='bg-violet-900 p-5 text-slate-50 w-full fixed'>
        <div className="md:flex item-center md:px-10 px-5">

          <div className='flex w-full'>
            <Link to = {'/'}>
              <h1 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} /> Ekart</h1>
            </Link>

            <div className='ms-auto md:hidden'>
              <button onClick={ () => setShow(!show) }><FontAwesomeIcon icon={faBars} className='text-slate-50 border border-slate-50 p-3 rounded' /></button>
            </div>
          </div>
          
          { show &&  
            <ul className='ms-auto md:hidden flex'>
              <li>
                <Link to = {'/wishlist'}>
                  <button className='border border-slate-50 p-3 rounded hover:bg-slate-50 hover:text-black flex'><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} className='me-2' />Wishlist<span className='rounded border border-slate-50 bg-slate-50 text-black ms-2'>{ wishlistArray.length }</span></button>
                </Link>
              </li>

              <li>
                <Link to = {'/cart'}>
                  <button className='border border-slate-50 p-3 rounded ms-3 hover:bg-slate-50 hover:text-black flex'><FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff00",}} className='me-2' />Cart<span className='rounded border border-slate-50 bg-slate-50 text-black ms-2'>{ cartArray.length }</span></button>
                </Link>
              </li>
            </ul>
          }

          <ul className='ms-auto md:flex hidden'>
            <li>
              <Link to = {'/wishlist'}>
                <button className='border border-slate-50 p-3 rounded hover:bg-slate-50 hover:text-black flex'><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} className='me-2' />Wishlist<span className='rounded border border-slate-50 bg-slate-50 text-black ms-2'>{ wishlistArray.length }</span></button>
              </Link>
            </li>

            <li>
              <Link to = {'/cart'}>
                <button className='border border-slate-50 p-3 rounded ms-3 hover:bg-slate-50 hover:text-black flex'><FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff00",}} className='me-2' />Cart<span className='rounded border border-slate-50 bg-slate-50 text-black ms-2'>{ cartArray.length }</span></button>
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Header