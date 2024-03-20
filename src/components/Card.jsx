import React from 'react'
import star_icon from '../assets/star.png'

function Card({ image, tag, rating, review, country, title, price }) {
    return (
        <div className="w-56 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] cursor-pointer rounded-lg p-2 md:w-52 sm:w-full sm:p-4">
            <div className="relative rounded-md">
                <img src={image} alt="card-img" className="rounded-md h-[275px] w-full object-cover" />
                {/*
                    my approach to do conditional rendering
                    (tag != "") ? <span className="absolute top-2.5 left-2.5 bg-white text-slate-950 text-sm uppercase rounded-sm px-2 py-0.5">{tag}</span> : <></>
                */}
                {/* Better approach using logical && operator */
                    (tag && <span className="absolute top-2.5 left-2.5 bg-white text-slate-950 text-sm uppercase rounded-sm px-2 py-0.5">{tag}</span>)
                }
            </div>
            <div className='flex flex-col gap-2 pt-3 text-sm font-light'>
                <div className="flex flex-wrap items-center gap-1">
                    <img src={star_icon} alt="star-icon" className="w-4" />
                    <span>{rating}</span>
                    <span className="text-gray-400">({review})</span>
                    <span className="text-gray-400"> • </span>
                    <span className="text-gray-400">{country}</span>
                </div>
                <h2>{title}</h2>
                <p><span className="font-semibold">From ${price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card