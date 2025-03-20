import React from 'react'
import { testimonials } from '../../constants'
const Testimonials = () => {
    return (
        <div>
            <div className="tracking-wide pt-20 md:pt-0" id='testimonials'>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-5 lg:my-15">
                    What people are saying
                </h2>
                <div className="flex flex-wrap justify-center">
                    {
                        testimonials.map((t, i) => (
                            <div key={i} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2 '>
                                <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                                    <p className='h-[100px] overflow-hidden'>
                                        {t.text}
                                    </p>
                                    <div className="flex mt-8 items-start">
                                        <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300' src={t.image} alt={t.user} />
                                        <div className="">
                                            <h6>
                                                {t.user}
                                            </h6>
                                            <span className='text-sm font-normal italic text-neutral-600'>
                                                {t.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials