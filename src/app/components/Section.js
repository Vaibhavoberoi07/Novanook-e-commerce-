import React from 'react'
import Link from 'next/link'

const Section = () => {
  return (
    <div id='section'>
        <div className="box left-box">
       <Link href="./shop"><button className='btn2'>Men Essentials</button></Link> 
        </div>
        <div className="box right-box">
        <Link href="./shop"><button className='btn2'>Women Essentials</button></Link> 
        </div>
      
    </div>
  )
}

export default Section
