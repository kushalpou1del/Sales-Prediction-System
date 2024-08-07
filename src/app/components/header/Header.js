import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'
import Link from 'next/link'


export default function Header() {
  return (
    <div className='  bg-slate-500 justify-between  items-center'>
      <div className='container w-5/6 flex justify-between  items-center m-auto text-white '>

      <Link href={"/"}> <img src="images/logo.png" alt="" height={100} width={100}  /></Link> 


        <div className='container flex gap-10  uppercase justify-center'>
         
         <Link href={"/"} className=' hover:scale-105 transition-all'>Home</Link>
         <Link href={"/"} className=' hover:scale-105 transition-all'>About Us</Link>
         <Link href={"/"} className=' hover:scale-105 transition-all'>Forecast</Link>
            <link rel="stylesheet" href="" />
       </div>

        <Button
          title={"Login"}
          bgColor={"#E8792C"}
          padL={10}
          padT={3}
          color={"white"}
        // event={onLogin}
        />
      </div>
    </div>
  )
}
