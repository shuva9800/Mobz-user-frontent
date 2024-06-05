import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex justify-evenly items-center py-4 px-3 bg-slate-800 text-white'>
        <Link to='/signup'>
            <p>User Data Entry</p>
        </Link>
        <Link to='/getdata'>
            <p>Get User Data</p>
        </Link>
        <Link to='/liveroom'>
            <p>Live Room</p>
        </Link>

    </div>
  )
}
