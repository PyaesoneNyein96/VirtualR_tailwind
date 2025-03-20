import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../../constants'

const Footer = () => {
    return (
        <footer className='container px-6  mx-auto mt-20 border-t py-10 border-neutral-800'>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 text-center sm:text-center md:text-left">
                <div className="">

                    <h3 className='text-md font-semibold mb-4'>Resources</h3>
                    <ul className='space-y-2'>
                        {resourcesLinks.map((link, i) => (
                            <li key={i}>
                                <a href={link.href} className='text-neutral-400 hover:text-white transition'>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/*  */}

                <div className="">

                    <h3 className='text-md font-semibold mb-4'>Platform</h3>
                    <ul className='space-y-2'>
                        {communityLinks.map((link, i) => (
                            <li key={i}>
                                <a href={link.href} className='text-neutral-400 hover:text-white transition'>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/*  */}

                <div className="">

                    <h3 className='text-md font-semibold mb-4'>Community</h3>
                    <ul className='space-y-2'>
                        {platformLinks.map((link, i) => (
                            <li key={i}>
                                <a href={link.href} className='text-neutral-400 hover:text-white transition'>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                © {new Date().getFullYear()} VirtualR. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer