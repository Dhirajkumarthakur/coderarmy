import React from 'react';

const HeroSect = () => { // Component name matches the import
    return (
        <section className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-emerald-400 text-white text-center px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>Welcome to Coder Army</h1>
            <p className='text-lg md:text-xl mb-8 max-w-2xl'>
                Join the community of passionate coders and take your skills to the next level. Learn, build, and grow with us!
            </p>
            <div className='flex gap-4'>
                <button className='bg-white text-blue-500 py-3 px-6 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all'>
                  
                    
                    Get Started
                    
                </button>
                <button className='bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition-all'>
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default HeroSect; // Ensure the component is exported