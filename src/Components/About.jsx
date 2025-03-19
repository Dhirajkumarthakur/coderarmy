import React from 'react';

const About = () => {
    return (
        <section id="about" className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-400 text-white text-center px-4 py-12'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>About Us</h1>
            <p className='text-lg md:text-xl mb-8 max-w-2xl'>
                We are a passionate team of developers dedicated to helping you learn, grow, and succeed in the world of coding. Join us and become part of the Coder Army!
            </p>

            {/* New Div with Image and Details */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 md:p-8 w-full max-w-4xl'>
                {/* Image */}
                <div className='w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white'>
                    <img
                        src='https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with the actual image URL
                        alt='Sahwej Ali'
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Details */}
                <div className='text-left text-black'> {/* Set text color to black */}
                    <h2 className='text-2xl md:text-3xl font-bold mb-2'>John DOn</h2>
                    <p className='text-lg md:text-xl mb-2'>IIT Madras Alumni</p>
                    <p className='text-lg md:text-xl'>
                        With 3 years of experience at Google, Sahwej is a skilled developer passionate about building scalable and innovative solutions. He is dedicated to mentoring aspiring coders and sharing his expertise with the community.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;