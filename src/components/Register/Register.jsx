import React from 'react';

const Register = () => {
    return (
        <div>
            <h2 className='text-2xl underline text-blue-600 text-center my-3'>Please Register:</h2>
            <div className=''>
                <form className='flex flex-col'>
                    <div className="text-center">
                        <input name='name' type="text" placeholder='Your Name' className='border rounded pl-2 text-sm py-2 md:w-96 my-2 ' />
                        <input name='email' type="email" placeholder='Your Email' className='border rounded pl-2 text-sm py-2 md:w-96 my-2 ' />
                    <br />
                    <input name='password' type="password" placeholder='Your password' className='border rounded pl-2 text-sm py-2 md:w-96 my-2 '/>
                    </div>
                    <div className='mx-auto py-3'>
                        <button className='rounded text-sm bg-slate-200 px-3 border'>register</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Register;