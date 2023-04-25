import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (

        <div className='form-container'>
            <h2 className='form-title'> SignUp </h2>

            <form>
                {/* for email */}
                <div className='form-control'>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="" required />

                </div>

                {/* for password */}
                <div className='form-control'>
                    <label htmlFor="password"> Password</label>
                    <input type="password" name="password" id="" required />
                </div>

                {/* for Confirm password */}
                <div className='form-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="" required />
                </div>

                {/* akta button nibo */}
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;