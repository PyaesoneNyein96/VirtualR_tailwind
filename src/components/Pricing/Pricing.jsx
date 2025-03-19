import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../../constants'


const Pricing = () => {
    return (
        <div>
            <div className="mt-20">
                <h2 className="text-3xl sm:text-3xl lg:text-5xl text-center my-8 tracking-wider">
                    Pricing
                </h2>
                <div className="flex flex-wrap">
                    {
                        pricingOptions.map((p, i) => (
                            <div key={i} className='w-full sm:w-1/2 lg:w-1/3 p-2 '>
                                <div className="p-10 border border-neutral-500 rounded-xl">
                                    <p className="text-2xl mb-8">
                                        {p.title}
                                        {p.title == "Pro" && <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl '> (Most Popular)</span>}
                                    </p>
                                    <p className="mb-8">
                                        <span className='text-5xl mt-6 mr-2'>{p.price}</span>
                                        <span className='text-neutral-400 tracking-tight'>
                                            /Month
                                        </span>
                                    </p>
                                    <ul>
                                        {
                                            p.features.map((f, i) => (
                                                <li key={i} className='flex items-center mt-2  '>
                                                    <CheckCircle2 />
                                                    <span className='mx-2 text-neutral-400'>
                                                        {f}
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    {/* <div className="btn-wrap mt-10   flex justify-center items-center"> */}
                                    <a href="#" className='inline-flex justify-center items-center w-full h-11 p-5 mt-20 text-center hover:bg-orange-900 rounded-lg border border-orange-900 tracking-tight text-xl transition duration-200'>Subscribe</a>
                                    {/* </div> */}

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing