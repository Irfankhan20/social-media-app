import React from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';

const Auth = () => {
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>IKP Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>


            <SignUp></SignUp>

        </div>
    );
};


function SignUp() {
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>

                {/* first and last name  */}
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname' />

                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname' />
                </div>

                {/* username  */}
                <div>
                    <input type="text" name='username' placeholder='Username' className="infoInput" />
                </div>

                {/* password & confirm password */}
                <div>
                    <input type="text" name='password' placeholder='password' className="infoInput" />

                    <input type="text" name='confirmpass' placeholder='Confirm Password' className="infoInput" />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Already have an account? Login</span>
                </div>
                <button className='button infoButton' type='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default Auth;