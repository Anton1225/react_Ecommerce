import './Navbar.css';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import React, {useState, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png'

function Navbar() {
    const [menu, setMenu]= useState();
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }

    return(
<div className='navbar'>
    <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>Shopper</p>
    </div>
    <img className='nav-dropdown' src={nav_dropdown} alt='' onClick={dropdown_toggle} />
    <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to='/'style={{textDecoration: 'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens'style={{textDecoration: 'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens'style={{textDecoration: 'none'}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'style={{textDecoration: 'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
       <Link to='/login'><button>Loggin</button></Link> 
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
</div>
)}
export default Navbar;