import React, { useState } from 'react';
import './LoginModel.scss';
import {RxCross2} from 'react-icons/rx';
import supabase from '../../supabase';
import {useDispatch} from 'react-redux'
import {  setUser } from '../../slices/userSlices';


function LoginModel({open,setOpen}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginType, setLoginType] = useState(true);

    const dispatch = useDispatch();

    const signup = async () => {
        const {data} = await supabase.auth.signUp({
            email,
            password
        });
        
        if(data.user){
            alert('Account Creted')
        }
    }
    const login = async () => {
        const {data,error} = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if(error){
            alert(error?.message);
            return
        }
        dispatch(setUser(data.user))

    }


  return (
   open ? (
   <div className='overlay'>
        <div className="LoginModel">
            <div className="left">
                <div className="left-container">
                    <p className="Login-title">
                        LogIn
                    </p>
                    <span className='Login-desc'>
                        Get Happiness through the order
                    </span>
                </div>
            </div>
            <div className="right">     
            <input type="email" 
                placeholder='Email'
                className='Login-input'
                required
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
            />
            <input type="password" 
                placeholder='Password'
                className='Login-input'
                required
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
            />
            {
                loginType ? (
                    <button className='Login-btn' type="submit" onClick={login}>Login</button>
                ):(
                    <button className='Login-btn' type="submit" onClick={signup}>Signup</button>
                )
            }
            {
                loginType ? (
                    <p className='Login-signup' onClick={() => setLoginType(false)}>New to Flipkart? Create an Anccount</p>
                ):(
                    <p className='Login-signup' onClick={() => setLoginType(true)}>Already an user? Login an account</p>
                )
            }
            </div>
            <div className="close" onClick={() =>setOpen(false)}>
                <RxCross2/>
            </div>
        </div>
   </div>
   ):(<></>)
  )
}

export default LoginModel