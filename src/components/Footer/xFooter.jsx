import React from 'react'


const xFooter = () => {
    return (
        <footer className="bg-black text-white mt-20 py-6">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-start  sm:text-center md:text-left">

                {/* Column 1 - Company Info */}
                <div>
                    <h2 className="text-xl font-semibold text-orange-500">About Us</h2>
                    <p className="text-sm mt-2">
                        We provide high-quality services with a focus on customer satisfaction.
                    </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-orange-500">Quick Links</h2>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Services</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Blog</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3 - Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold text-orange-500">Contact</h2>
                    <ul className="mt-2 space-y-2">
                        <li>Email: contact@example.com</li>
                        <li>Phone: +123 456 789</li>
                        <li>Location: 123 Street, City</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                © {new Date().getFullYear()} VirtualR. All rights reserved.
            </div>
        </footer>
    );
};

export default xFooter;


