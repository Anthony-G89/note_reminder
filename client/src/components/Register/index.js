/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';



const Register = () => {

function registerUser  ()  {
    alert("Register btn is working")
}

    return (
        <div className="registerWrapper">
            <div className="registerContainer row align-items-center">
                <div className="col-6">
                    <img src={process.env.PUBLIC_URL + "./assets/register-img-min.jpg"} className="registerImage" alt="Image for register page" />
                </div>
                <div className="col-6">
                    <form className="formWrapper">
                        <label className="registerLabel">First Name</label>
                        <input className="registerInput" />
                        <label className="registerLabel">Last Name</label>
                        <input className="registerInput" />
                        <label className="registerLabel">Email</label>
                        <input className="registerInput" />
                        <label className="registerLabel">Password</label>
                        <input className="registerInput" />

                        <p className="alreadyAMember">Already on Note Reminder?
                            <Link><a className="loginFromRegisterBtn" href="/login">Log in</a></Link>
                        </p>

                        <button className="registerBtn" onClick={registerUser}>Register</button>
                    </form>


                </div>

            </div>
        </div>
    )
};

export default Register;
