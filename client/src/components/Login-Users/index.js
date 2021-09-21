/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';



const LoginUser = () => {

    function loginUserBtn() {
        alert("login btn is working")
    }

    return (
        <div className="loginWrapper">
            <div className="loginContainer row align-items-center">
                <div className="col-6">
                    <img src={process.env.PUBLIC_URL + "./assets/login-img-min.jpg"} className="loginImage" alt="Image for login page" />
                </div>
                <div className="col-6">
                    <form className="formWrapper">
                        <label className="loginLabel">Email</label>
                        <input className="loginInput" />
                        <br />
                        <label className="loginLabel">Password</label>
                        <input className="loginInput" />
                        <p className="newUser">New to Note Reminder?
                            <Link to="/register"><a href="#" className="registerBtnFromLogin">Register here</a></Link>
                        </p>
                        <button className="loginBtn" onClick={loginUserBtn}>Log In</button>
                    </form>

                </div>

            </div>
        </div>
    )
};

export default LoginUser;