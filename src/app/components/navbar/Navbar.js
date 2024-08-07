import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className=' bg-slate-800 text-white'>
      <div className='container w-5/6 m-auto flex gap-16 py-3 uppercase justify-center'>
         
        <Link href={"/"} className=' hover:scale-105 transition-all'>Home</Link>
        <Link href={"/"} className=' hover:scale-105 transition-all'>About Us</Link>
        <Link href={"/"} className=' hover:scale-105 transition-all'>Forecast</Link>
           
      </div>
    </div>
  )
}
