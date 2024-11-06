import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineFacebook } from 'react-icons/md';

export default function Team() {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {[...Array(8)].map((_, index) => (
                    <div
                        key={index}
                        className='col-span-1 rounded-[50px] overflow-hidden border border-black relative product-card group'
                    >
                        <div className='relative'>
                            <div className='p-10'>
                                <img
                                    src={`/image/client/team-img${index + 1}.jpg`}
                                    alt='team-member'
                                    title='team-member'
                                    className="w-full h-full object-cover product-image rounded-2xl"
                                />
                            </div>

                            <div className='qodef-social-icon '>
                                <span className="qodef-social-dot group-hover:hidden">...</span>
                                <div className='flex items-center gap-2 absolute right-0 opacity-0 group-hover:opacity-100 group-hover:right-[5px] transition-all duration-300 ease-in-out'>
                                    <a href='/#'><FaLinkedin className='text-xl' /></a>
                                    <a href='/#'><MdOutlineFacebook className='text-xl' /></a>
                                    <a href='/#'><FaTwitter className='text-xl' /></a>
                                    <a href='/#'><FaInstagram className='text-xl' /></a>
                                </div>
                            </div>

                            <img
                                src={`/image/services/service_hover.png`}
                                alt='hover-banner'
                                title='hover-banner'
                                className="w-full h-full object-cover absolute top-0 left-0 hover-image"
                            />

                            <div className='border-t border-black p-10 pt-5 relative z-10'>
                                <div>
                                    <h5 className='text-2xl lg:text-xl xl:text-2xl font-medium'>Shirley Holt</h5>
                                    <p className='uppercase text-[#151015]'>(video producer)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
