import React, { useContext } from 'react';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    // signIn tak nibo..
    const { signIn } = useContext(AuthContext);

    // login korar por ei login page thekei amk niye jabe j page a chilam oi page a tai link connect korbo
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // akhn signIn tak call korbo...

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // email password thik thakle form ta clear hoye jabe
                form.reset();
                // login korar por user ta peyechi akhn user tak j page a chilo oi page a pathabo link diye.home a pathiye debo
                navigate('/')

            })
            .catch(error => {
                console.log(error);

            })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'> Login </h2>

            <form onSubmit={handleLogin}>

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
                {/* akta button nibo */}
                <input className='btn-submit' type="submit" value="Login" />
            </form>

            {/* account na thakle signup page a niye jabe tai link banalam */}
            <p><small>New to Ema-john?  <Link to='//signup'> Create New Account </Link></small></p>

        </div>
    );
};

export default Login;