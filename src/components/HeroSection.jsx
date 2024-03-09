import React from 'react'
import HeroImage from '../assets/photo-grid.png'

function HeroSection() {
    return (
        <section className="w-full flex flex-col justify-center items-center px-10 sm:p-6">
            <img src={HeroImage} alt="hero-image" className='my-12 w-3/5 min-w-96 md:w-4/5 object-contain sm:w-full sm:min-w-full' />
            <div className="w-full my-4" >
                <h1 className="font-semibold text-4xl mb-4">Online Experiences</h1>
                <p className="text-base font-light">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default HeroSection