/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./style.css";
import { Link, useHistory } from 'react-router-dom';



const LoginUser = ({ userLoggingIn , setEmail, setPassword }) => {

    // let history = useHistory();

    // function loginUserBtn() {
    //     history.push("/userDashbored")
    // }

    return (
        <div className="loginWrapper">
            <div className="loginContainer row align-items-center">
                <div className="col-6">
                    <img src={process.env.PUBLIC_URL + "./assets/login-img-min.jpg"} className="loginImage" alt="Image for login page" />
                </div>
                <div className="col-6">
                    <form className="formWrapperInLogin">
                        <label className="loginLabel">Email</label>
                        <input className="loginInput" placeholder="Enter Email" onChange={event => setEmail(event.target.value)} />
                        <br />
                        <label className="loginLabel">Password</label>
                        <input className="loginInput" placeholder=" Enter Password" onChange={event => setPassword(event.target.value)} />
                        <p className="newUser">New to Note Reminder?
                            <Link to="/register"><a href="/register" className="registerBtnFromLogin">Register here</a></Link>
                        </p>
                        <button className="loginBtn" onClick={userLoggingIn}>Log In</button>
                    </form>

                </div>

            </div>
        </div>
    )
};

export default LoginUser;