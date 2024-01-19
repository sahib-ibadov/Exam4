import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "./Header.scss"

function Header() {
  const location=useLocation()
  return (

 <div className= {location.pathname !='/'? 'withOutFix':"header__all"}>
        <div className='header__all__inside'>
        <div className='header__all__inside__left' ><img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" /> <span><b>COURSE</b></span></div>
       <div className='header__all__inside__middle'>
       <Link  to="/">Home</Link>
        <Link  to="/Add">Add</Link>
        <Link  to="/Basket">Basket</Link>
        <Link  to="/WishList">Wishlist</Link>
      
       </div>
       <div className='header__all__inside__right'>
       <i class="fa-solid fa-phone"></i>055343444
       </div>
      
    </div>
 </div>
  
  )
}

export default Header
