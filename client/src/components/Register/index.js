/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./style.css";



const Register = () => {
    return (
        <div className="registerWrapper">
            <div className="registerContainer row align-items-center">
                <div className="col-6">
                    <img src={process.env.PUBLIC_URL + "./assets/register-img-min.jpg"} className="registerImage" alt="Image for register page" />
                </div>
                <div className="col-6">
                    <form>
                        <label>First Name</label>
                        <input />
                        <label>Last Name</label>
                        <input />
                        <label>Email</label>
                        <input />
                        <label>Password</label>
                        <input />

                    </form>
                </div>

            </div>
        </div>
    )
};

export default Register;
