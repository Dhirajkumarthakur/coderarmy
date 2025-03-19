import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-400 to-red-400 text-white text-center px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>Contact Us</h1>
            <p className='text-lg md:text-xl mb-8 max-w-2xl'>
                Have questions or feedback? Reach out to us! Fill out the form below, and we'll get back to you as soon as possible.
            </p>

            {/* Contact Form */}
            <form className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
                <div className='mb-6'>
                    <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter your email'
                        className='w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-black'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='Enter your password'
                        className='w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-black'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
                    <textarea
                        id="description"
                        placeholder='Enter your message'
                        rows="4"
                        className='w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-black'
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className='w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all'
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;