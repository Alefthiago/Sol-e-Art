'use client'
import 'animate.css';
import React from 'react'
import { Carousel } from 'flowbite-react';

const Carrosel = () => {

    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    return (
            <div className="mt-18 md:flex sm:flex max-sm:mt-4 h-96 max-md:h-72 2xl:h-96 hidden justify-center items-center text-center">
                <Carousel>
                    <div className='flex justify-center items-center'>
                        <img className='object-cover' src="./images/media1.png" alt="..." />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='object-cover' src="./images/media2.png" alt="..." />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='object-cover' src="./images/media3.png" alt="..." />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='object-cover' src="./images/media4.png" alt="..." />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='object-cover' src="./images/media5.png" alt="..." />
                    </div>
                </Carousel>
            </div>
        
    )

};

export default Carrosel