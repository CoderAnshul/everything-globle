import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div className={`grid md:grid-cols-12 gap-4`}>
                <div className={`col-span-7 content-center max-md:order-1`}>
                    <div className={`px-5 lg:px-20`}>
                        <h3 className={`text-3xl lg:text-[40px] font-semibold lg:leading-[50px]`}>We are the best solution. Our team contains students whos start their first job here, with us.</h3>
                        <div className={`grid grid-cols-2 gap-x-8 my-3`}>
                            <div className={`col-span-1 sapce-y-2`}>
                                <p className='font-semibold'> 01</p>
                                <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu fugiat nulla sunt in culpa.</p>
                            </div>
                            <div className={`col-span-1 sapce-y-2`}>
                                <p className='font-semibold'> 02</p>
                                <p>Sem et tortor consequat id porta nibh venenatis cras proin sagittis nisl.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hidden md:block col-span-5 px-4 sm:px-0 relative grid justify-center`}>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 -top-12`}>
                        <img src={`/image/home/about-us3.webp`} alt="Error" className='w-[120px]' />
                    </div>
                    <img src={`/image/home/about-us.png`} alt="Error" />
                    <div className={`absolute bottom-7 left-24`}>
                        <img src={`/image/home/about-2.png`} alt="Error" className='w-[60px]' />
                    </div>
                </div>
            </div>
        </>
    )
}
