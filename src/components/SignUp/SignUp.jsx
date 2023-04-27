import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const [error ,setError] = useState('');

    // createUser tak nibo..
    const {createUser} = useContext(AuthContext);

    // box er moddhe theke email password gula k nibo...

    const handleSignUp = event => {
        // loading ta k thekabo tai
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

        // error tak reset kore nibe..
        setError('');

        // akhn validation set korbo..mane uppercase lowercase password,password 8 letter er boro na hoy amon..ata korte gole prothome useState declear korte hobe..Line-7 a korlam..

        if(password!== confirm){
            setError('Your password is not match')
            return
        }
        else if( password.length < 6){
            setError('password must be 6 characters or longer')
            return
        }
        // eiber createUser tak call korbe..
        createUser(email , password)
        .then (result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch( error =>{
            console.log(error);
            setError(error.message);
        })
    }
    return (

        <div className='form-container'>
            <h2 className='form-title'> SignUp </h2>
            {/* akta handle add krbo form er moddhe */}

            <form onSubmit={handleSignUp}>
                {/* for email */}
                <div className='form-control'>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="1" required />

                </div>

                {/* for password */}
                <div className='form-control'>
                    <label htmlFor="password"> Password</label>
                    <input type="password" name="password" id="2" required />
                </div>

                {/* for Confirm password */}
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="3" required />
                </div>

                {/* akta button nibo */}
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            {/* account thakle login a niye jabe tai link banalam */}
            <p><small>Already have an account? <Link to='/login'>Login </Link></small></p>

            {/* error er likha ta dekhabo */}
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;