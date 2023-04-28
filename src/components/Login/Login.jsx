import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    // password ta show korte bolle show hobe onno time a false thakbe mane dekhabe na..
    const [show, setShow] = useState(false);

    // signIn tak nibo..
    const { signIn } = useContext(AuthContext);

    // login korar por ei login page thekei amk niye jabe j page a chilam oi page a tai link connect korbo
    const navigate = useNavigate();

    // current location ta dekhte hobe kothai achi ami
    const location = useLocation();
    console.log(location);

    // location a jawar por state thakle state a jabe..than from a jabe tarpor pathname a jabe..
    const from = location.state?.from?.pathname || '/';

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
                navigate(from, { replace: true })

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

                    {/* mane password show te click korle show hobe text er moto...nahole hide thakbe  */}
                    <input type={show ? "text" : "password"} name="password" id="" required />

                    {/* akta sorto debo password show thakle hide hobe ar hide thakle show hobe */}
                    <p onClick={() => setShow(!show)} > <small>
                        {
                            show ? <span> Hide Password </span> : <span> Show Password</span>
                        }
                    </small></p>

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