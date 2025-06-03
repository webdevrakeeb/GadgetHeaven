import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-[40px] lg:py-[100px] bg-white'>
            <div className="container">
                <div className="top-part pb-5 md:pb-8 border-b border-b-[rgba(9,8,15,0.10)]">
                    <h2 className='text-[#09080F] text-[32px] font-Sora font-bold text-center mb-3'>Gadget Heaven</h2>
                    <p className='text-muted font-medium font-Sora text-center'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="bottom-part pt-5 md:pt-8">
                    <div className="max-w-[810px] mx-auto grid md:grid-cols-3 gap-y-6">
                        <div className="single-card">
                            <h2 className='text-0f text-lg font-Sora font-medium text-center mb-2 md:mb-4'>Services</h2>
                            <ul className='flex flex-col items-center gap-y-3'>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Product Support</Link>
                                </li>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Order Tracking</Link>
                                </li>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Shipping & Delivery</Link>
                                </li>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Returns</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="single-card">
                            <h2 className='text-0f text-lg font-Sora font-medium text-center mb-2 md:mb-4'>Company</h2>
                            <ul className='flex flex-col items-center gap-y-3'>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>About Us</Link>
                                </li>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Careers</Link>
                                </li>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="single-card">
                            <h2 className='text-0f text-lg font-Sora font-medium text-center mb-2 md:mb-4'>Legal</h2>
                            <ul className='flex flex-col items-center gap-y-3'>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Terms of Service</Link>
                                </li>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className='text-muted font-Sora transition-all duration-200 hover:text-0f'>Cookie Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;