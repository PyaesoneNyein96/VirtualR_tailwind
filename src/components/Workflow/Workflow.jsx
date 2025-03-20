import React from 'react'
import codeImg from '../../assets/code.jpg'
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../../constants'

const Workflow = () => {
    return (
        <div className=' mb-40 pt-20 md:pt-0  lg:mt-0 mt-20' id='workflow'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-tight'>
                Accelerate your {" "}
                <span className="font-medium bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
                    coding workflow.
                </span>
            </h2>

            <div className="flex flex-wrap justify-center">

                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt="" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {
                        checklistItems.map((item, i) => (

                            <div key={i} className='flex mb-12'>
                                <div className="text-green-400 mx-6 bg-netural-900 h-10 p-2 justify-center items-center rounded-full">
                                    {<CheckCircle2 />}
                                </div>
                                <div className="">
                                    <h5 className="mt-1 mb-2 text-xl">
                                        {item.title}
                                    </h5>
                                    <p className="text-md text-neutral-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Workflow