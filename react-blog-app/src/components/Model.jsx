import React from 'react'

function Model({isOpen, onClose}) {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
            <div className='model-container'>
                <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
                    {/* model content */}
                    <h2 className='text-xl font-semibold mb-5 mt-6 uppercase '>Please Login here</h2>
                    <form className='px-4'>
                        {/* email */}
                        <div className='mb-5'>
                            <input type="email" name='email' id='email' placeholder='example@gmail.com'
                            className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                            font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                        </div>
                        <div className='mb-5'>
                            <input type="password" name='password' id='password' placeholder='Enter your password'
                            className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                            font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                        </div>
                        <div>
                            <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 
                            px-8 text-base font-semibold text-white outline-none'>Login</button>
                        </div>
                    </form>

                    {/* model close */}

                    <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2
                    px-8 rounded inline-flex items-center mt-5'>
                        Close
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Model
