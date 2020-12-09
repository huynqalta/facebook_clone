import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
const Login = () => {
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth, "auth");
            history.push("/");
        }).catch((e) => {
            alert(e.message)
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <h3>Login To Facebook</h3>
                <form>
                    <center>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" />
                    </center>
                    <center>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </center>
                    <center>
                        <button onClick={login} type="submit" className="login__login">Log In</button>
                    </center>
                    <center>
                        <h6>Forgoten Password</h6>
                    </center>
                    <center>
                        <hr></hr>
                    </center>
                    <center>
                        <Link to="/register" >
                            <button className="login__createNewAccount">Create New Account</button>
                        </Link>
                    </center>
                </form>
                <div >

                </div>
            </div>
        </div>
    )
}
export default Login