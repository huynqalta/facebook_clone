import React from 'react'
import './loginheader.css'
import { Link } from 'react-router-dom'
const LoginHeader = () => {
    return (
        <div className="header">
            <Link className="Link" to="/">
                <img src="https://i.ibb.co/WzybLQK/del.png" alt="facebook logo" className="header__logo"></img>
            </Link>
            <Link className="register" to="/register">
                <button className="header__button">Create New Account</button>
            </Link>
        </div>
    )
}
export default LoginHeader