/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';



const Register = ({ registeringUser, setFirstName, setLastName, setEmail, setPassword }) => {






    return (
        <div className="registerWrapper">
            <div className="registerContainer row align-items-center">
                <div className="col-6">
                    <img src={process.env.PUBLIC_URL + "./assets/register-img-min.jpg"} className="registerImage" alt="Image for register page" />
                </div>
                <div className="col-6">
                    <form className="formWrapperInRegister">
                        <label className="registerLabel">First Name</label>
                        <input className="registerInput" placeholder="Enter First Name...." onChange={event => setFirstName(event.target.value)} />
                        <label className="registerLabel">Last Name</label>
                        <input className="registerInput" placeholder="Enter Last Name...." onChange={event => setLastName(event.target.value)} />
                        <label className="registerLabel">Email</label>
                        <input className="registerInput" placeholder="Enter Email" onChange={event => setEmail(event.target.value)} />
                        <label className="registerLabel">Password</label>
                        <input className="registerInput" placeholder=" Enter Password" type={"password"} onChange={event => setPassword(event.target.value)} />
                        <p className="alreadyAMember">Already on Note Reminder?
                            <Link to="/login" className="loginFromRegisterBtn">Log in</Link>
                        </p>

                        <button className="registerBtn" type='submit' onClick={registeringUser}>Register</button>
                    </form>


                </div>

            </div>
        </div>
    )
};

export default Register;
