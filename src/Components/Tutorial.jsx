import React from 'react';

const Tutorial = () => {
    return (
        <section id="tutorial" className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 to-purple-400 text-white text-center px-4 py-12'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>Tutorials</h1>
            <p className='text-lg md:text-xl mb-8 max-w-2xl'>
                Explore our comprehensive tutorials on web development, programming, and more. Start your coding journey with Coder Army today!
            </p>

            {/* Card Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-6xl px-4'>
                {/* Card 1 */}
                <div className='bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 flex flex-col items-center gap-4'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKBRuNYZcdmHIsBWF4HNnpGdXbyq5mslHcViGlPZQGwdNSBm9ISI4Y2fvVuay-GV8Cbk&usqp=CAU' // Replace with actual image URL
                        alt='Web Development'
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <button className='bg-white text-indigo-500 py-2 px-6 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all'>


                    <a href='https://www.w3schools.com/cpp/'>
                        Learn More
                    </a>
                    </button>
                </div>

                {/* Card 2 */}
                <div className='bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 flex flex-col items-center gap-4'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnckzr3uu8aglaAFCaesTQHwuEYg8_NAKZcQ6JgqNyPj3sCQ4_xnhJSe974K20OvpEts&usqp=CAU' // Replace with actual image URL
                        alt='Programming'
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <button className='bg-white text-indigo-500 py-2 px-6 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all'>

                            
                        <a href='https://www.w3schools.com/java/'>
                        Learn More
                        </a>
                    </button>
                </div>

                {/* Card 3 */}
                <div className='bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 flex flex-col items-center gap-4'>
                    <img
                        src='https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?resize=1200%2C1200&ssl=1' // Replace with actual image URL
                        alt='Data Structures'
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <button className='bg-white text-indigo-500 py-2 px-6 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all'>

                        <a href='https://www.w3schools.com/python/'>

                        Learn More
                        </a>
                    </button>
                </div>

                {/* Card 4 */}
                <div className='bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 flex flex-col items-center gap-4'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12SMucV1yoXW-nEEb70ZXugC-RC7VM43xFg&s' // Replace with actual image URL
                        alt='Algorithms'
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <button className='bg-white text-indigo-500 py-2 px-6 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all'>

            <a href='https://www.w3schools.com/js/'>

                        Learn More
            </a>
                    </button>
                </div>

                {/* Card 5 */}
                <div className='bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 flex flex-col items-center gap-4'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8msSdkuY3G81WM_FIzMhJi66jj1bXmAgyw&s' // Replace with actual image URL
                        alt='Machine Learning'
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <button className='bg-white text-indigo-500 py-2 px-6 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all'>
                            
                        <a href='https://www.w3schools.com/REACT/DEFAULT.ASP'>
                        Learn More
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Tutorial;