import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className='bg-violet-900 p-5 text-slate-50 w-full'>
        <div className="flex item-center px-10">

          <Link to = {'/'}>
            <h1 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} /> Ekart</h1>
          </Link>

          <ul className='ms-auto flex'>
            <li>
              <Link to = {'/wishlist'}>
                <button className='border border-slate-50 p-3 rounded hover:bg-slate-50 hover:text-black'><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} className='me-2' />Wishlist<span className='rounded border border-slate-50 bg-slate-50 text-black ms-2'>0</span></button>
              </Link>
            </li>

            <li>
              <Link to = {'/cart'}>
                <button className='border border-slate-50 p-3 rounded ms-3 hover:bg-slate-50 hover:text-black'><FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff00",}} className='me-2' />Cart<span className='rounded border border-slate-50 bg-slate-50 text-black ms-2'>0</span></button>
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Header