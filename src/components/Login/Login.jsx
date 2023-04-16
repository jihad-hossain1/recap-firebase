import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogleLogo } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const [logByEmail, setLogByEmail] = useState(false);
    const [user, setUser] = useState({});
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch(error => {
            console.log(error.message);
        })
    }
    const handleGithubLogIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <h2 className='text-2xl underline text-blue-600 text-center my-3'>Please Log-In:</h2>
            
                <div className=''>
                <form className='flex flex-col'>
                    <div className="text-center">
                        <input name='email' type="email" placeholder='Your Email' className='border rounded pl-2 text-sm py-2 md:w-96 my-2 ' />
                    <br />
                    <input name='password' type="password" placeholder='Your password' className='border rounded pl-2 text-sm py-2 md:w-96 my-2 '/>
                    </div>
                    <div className='mx-auto py-3'>
                        <button className='rounded text-sm bg-slate-200 px-3'>LogIn</button>
                    </div>
                </form>
                
            </div>
            <div className='text-center my-5'>
                <button onClick={handleGoogleLogIn} className='border rounded-md bg-green-100 px-7 py-2 hover:bg-green-500 hover:font-semibold hover:text-white'>
                {/* <FontAwesomeIcon icon={faGoogleLogo} flip /> */}
                    <span>
                        Sign-In with Google
                    </span>
                </button>
            </div>
            <div className='text-center my-5'>
                <button onClick={handleGithubLogIn} className='border rounded-md bg-yellow-100 px-7 py-2 hover:bg-yellow-500 hover:font-semibold hover:text-white'>
                    Sign-In with Github
                </button>
            </div>
        
        </div>
    );
};

export default Login;