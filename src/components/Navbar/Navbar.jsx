import React from 'react';
import css from "./style.module.css";
import Logo from "../../resources/images/logo/Image 8.png"

const Navbar = () => {
  return (
    <div>
      <div className={css.navbarlogo}>
        <img className ={css.logo} src= {Logo} alt='Right swipe'/>
      </div>
      <ul className={css.list}>
        <li>HOME</li>
        <li>TRIPS</li>
        <li>BLOG</li>
        <li>TESTIMONIALS</li>
        <li>FAQ</li>
        <li>CONTACT</li>
      </ul>
    </div>
  )
}

export default Navbar