import React from 'react'
import './Login.css'
import NavImg from '../../assets/Untitled.png'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <nav>
            <img src={NavImg}/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li>Products</li>
                <li>Services</li>
                <li>About</li>
                <li><NavLink to="/user-login"><button className="buttonNav" >Login</button></NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Login