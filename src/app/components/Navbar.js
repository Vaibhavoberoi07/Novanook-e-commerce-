"use client"
import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import Link from 'next/link'
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {

  const [open, setopen] = useState(false)


    const Toggle = ()=>{
      setopen(!open)
    }



  return (
    <>

      <div className="Navbar" >
        <div className={open ? "slider width " : "slider"}>
        </div>
        <IoMenuOutline className='ham' onClick={Toggle} />
        <RxCross1  className={open ? "cross visible" : "cross"} onClick={Toggle}/>
        <div className='logo textdeco'>
          <Link href='/' className='h2'><h2 >NOVANOOK</h2></Link> 
        </div>
        <div className={open ? "menu v2" : "menu"}>
          <Link href='/shop' className='textdeco'><h5 className='h5' onClick={Toggle}>MEN</h5></Link>

          <Link href='/shop' className='textdeco'> <h5 className='h5' onClick={Toggle}>WOMEN</h5></Link>
          <Link href='/shop' className='textdeco'> <h5 className='h5' onClick={Toggle}>SHIRTS</h5></Link>
          <Link href='/shop' className='textdeco'> <h5 className='h5' onClick={Toggle}>HOODIES</h5></Link>
          <Link href='/shop' className='textdeco'> <h5 className='h5' onClick={Toggle}>NEW & FEATURED</h5></Link>
          <Link href='/shop' className='textdeco'> <h5 className='h5' onClick={Toggle}>SHOP ALL</h5></Link>
        </div>
        <div className='search'>
          <div className="icons"><IoIosSearch /></div>
          <div className="icons"><IoMdHeartEmpty /></div>
          <div className="icons"><IoBagOutline /> </div>
        </div>
      </div>
    </>
  )
}

export default Navbar 
