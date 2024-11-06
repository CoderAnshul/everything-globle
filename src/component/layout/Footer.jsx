import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SlArrowUp } from 'react-icons/sl';
import { Link } from 'react-router-dom'

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle button visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="border border-black rounded-full text-3xl w-fit p-3 fixed left-7 bottom-7 z-50 cursor-pointer animate-arrow" // Add a custom hover animation
                >
                    <SlArrowUp className="transition-transform duration-300 transform" />
                </div>
            )}
            {/* <div style={{ background: `url(/image/home/bacground-img.png)` }}> */}
            <div className={`border custom_container !py-0 border-black bg-[#cbdec6] overflow-hidden rounded-[70px] mb-10`}>
                <div className={`md:px-[70px] !bg-[#fbfaf5] grid md:grid-cols-6 border-b border-black`}>
                    <div className={`col-span-3 py-8 max-md:grid max-md:justify-center`}>
                        <img src="/image/logo.png" alt="Error" className='w-[240px]' />
                    </div>
                    <div className={`col-span-3`}>
                        <div className={`flex w-full h-full md:ml-[70px] max-md:border-t border-black`}>
                            <div className={`border-r hover:text-[#f8a065] max-md:py-6 md:border-l border-black w-full h-full flex items-center justify-center text-3xl`}><FaLinkedin /></div>
                            <div className={`border-r hover:text-[#f8a065] max-md:py-6 border-black w-full h-full flex items-center justify-center text-3xl`}><FaFacebook /></div>
                            <div className={`border-r hover:text-[#f8a065] max-md:py-6 border-black w-full h-full flex items-center justify-center text-3xl`}><FaTwitter /></div>
                            <div className={` w-full  hover:text-[#f8a065] max-md:py-6 h-full flex items-center justify-center text-3xl`}>
                                <FaInstagram /></div>
                        </div>
                    </div>
                </div>
                <div className={`my-20 md:my-[170px] mx-[6%] md:mx-[70px]`}>
                    <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10`}>
                        <div className={`col-span-1 space-y-3`}>
                            <h5 className='text-2xl font-semibold'>Hello, Partners! :)</h5>
                            <p>Odio facilisis mauris sit amet mas sa vitae tortor condi tumes lacinia. Dig nissim suspendisse.</p>
                        </div>
                        <div className={`col-span-1 space-y-3`}>
                            <h5 className='text-2xl font-semibold'>Contact Us</h5>
                            <div className="space-y-1">
                                <p>350 Canal St, New York, USA</p>
                                <p>randall@example.com</p>
                                <p>+1123456788</p>
                            </div>
                        </div>
                        <div className={`col-span-1 space-y-3`}>
                            <h5 className='text-2xl font-semibold'>About Us</h5>
                            <div className={`space-y-2 uppercase`}>
                                <p><Link to="/">HOME</Link></p>
                                <p><Link to="/about">ABOUT</Link></p>
                                <p><Link to="/portfolio">PORTFOLIO</Link></p>
                                <p><Link to="/faq">FAQs</Link></p>
                                {/* <p><Link to="/services">SERVICES</Link></p> */}
                                <p><Link to="/our-client">OUR CLIENT</Link></p>
                                <p><Link to="/our-team">OUR TEAM</Link></p>
                                <p><Link to="/career">CAREER</Link></p>
                                <p><Link to="/blog">BLOG</Link></p>
                                <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                                <p><Link to="/terms-of-use">Terms of use</Link></p>
                                <p><Link to="/contact">CONTACT</Link></p>
                                {/* <p>WORK</p>
                                <p>SERVICES</p>
                                <p>ABOUT</p>
                                <p>CONTACT</p> */}
                            </div>
                        </div>
                        <div className={`col-span-1 space-y-3 mb-4`}>
                            <h5 className='text-2xl font-semibold'>Contact Us</h5>
                            <div className={`space-y-2`}>
                                <p>Odio facilisis mauris sit amet mas sa vitae.</p>
                                <div className={`border hidden md:block border-black rounded-full overflow-hidden relative`}>
                                    <input type="text" placeholder='Email...' className='bg-white w-full border-0 outline-0 h-full p-6' />
                                    <button className='border border-r-0 border-black rounded-full bg-[#f8a065] p-2 absolute right-0 h-full w-[65px]'>
                                        <FaArrowRightLong className='text-2xl m-auto' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`border block md:hidden border-black rounded-full overflow-hidden relative`}>
                        <input type="text" placeholder='Email...' className='bg-white w-full border-0 outline-0 h-full p-6' />
                        <button className='border border-r-0 border-black rounded-full bg-[#f8a065] p-2 absolute right-0 h-full w-[65px]'>
                            <FaArrowRightLong className='text-2xl m-auto' />
                        </button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
