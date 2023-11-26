import React, { useEffect, useState } from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';
import {IoSearch} from 'react-icons/io5';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {FaShoppingCart} from 'react-icons/fa'
import LoginModel from '../Login/LoginModel';
import {useDispatch, useSelector} from 'react-redux';
import {removeUser} from '../../slices/userSlices'
import supabase from '../../supabase';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const user = useSelector((state)=>state.userData.user);
    const dispatch = useDispatch()

    useEffect(() => {
        if(user){
            setIsOpen(false)
        }
    },[user])

    const handleOpen = () => {
        setIsOpen(true)
    }

    const signout = async() => {
        const {error} = await supabase.auth.signOut();
        if(!error){
            dispatch(removeUser())
        }
    }
  return (
    <div>
        <div className="navbar-container">
            <div className="navbar">
                <Link to="/">
                    <img
                    className='navbar-logo'
                     src='https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-hq-free-download-18.png' alt="flipkaart" style={{width:"150px"}} />
                </Link>
                <div className="navbar-search">
                    <input type="text" placeholder='Search for Products and brand'
                    className='navbar-searchbox'
                    />
                    <button className='searchbtn'>
                        <IoSearch/>
                    </button>
                </div>
                {
                    user ? (
                        <p onClick={signout}>@{user.email.slice(0,5)}</p>
                    ):
                        <button className='navbar-btn' onClick={handleOpen}>Login</button>
                    
                }
                
                    
                <div className="navbar-bcs">
                        <h3>Become a Seller</h3>
                </div>
                <div className="navbar-more">
                        <h3>More
                        <i className='moredown'>
                            <MdKeyboardArrowDown />
                        </i>
                        </h3>
                </div>
                <div className="navbar-cart">
                        <div className="cart-icon">
                            <FaShoppingCart />
                        </div>
                        <Link to="/cart" className='cart'>Cart</Link>
                </div>
                
            </div>
            <LoginModel open={isOpen} setOpen={setIsOpen}/>
        </div>
        
    </div>
  )
}

export default NavBar