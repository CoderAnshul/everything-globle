import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../utils/config';
import axios from 'axios';
import Loader from '../../layout/Loader';


// const portfolioData = [
//     { id: 1, imgSrc: '/image/home/img/img1.jpg', title: 'Main Home', type: 'design' },
//     { id: 2, imgSrc: '/image/home/img/img2.jpg', title: 'App Showcase', type: 'design' },
//     { id: 3, imgSrc: '/image/home/img/img3.jpg', title: 'Portfolio Accordion', type: 'development' },
//     { id: 4, imgSrc: '/image/home/img/img4.jpg', title: 'Shop Home', type: 'design' },
//     { id: 5, imgSrc: '/image/home/img/img5.jpg', title: 'Portfolio Metro', type: 'development' },
//     { id: 6, imgSrc: '/image/home/img/img8.jpg', title: 'Agency Home', type: 'development' },
//     { id: 7, imgSrc: '/image/home/img/img3.jpg', title: 'Blog Home', type: 'development' },
//     { id: 8, imgSrc: '/image/home/img/img6.jpg', title: 'Video Slider', type: 'design' },
//     { id: 9, imgSrc: '/image/home/img/img9.jpg', title: 'Portfolio Interactive', type: 'development' },
//     { id: 10, imgSrc: '/image/home/img/img1.jpg', title: 'Main Home', type: 'design' },
//     { id: 11, imgSrc: '/image/home/img/img4.jpg', title: 'App Showcase', type: 'design' },
//     { id: 12, imgSrc: '/image/home/img/img7.jpg', title: 'Portfolio Accordion', type: 'development' },
//     { id: 13, imgSrc: '/image/home/img/img2.jpg', title: 'Shop Home', type: 'design' },
//     { id: 14, imgSrc: '/image/home/img/img5.jpg', title: 'Portfolio Metro', type: 'development' },
//     { id: 15, imgSrc: '/image/home/img/img8.jpg', title: 'Agency Home', type: 'development' },
//     { id: 16, imgSrc: '/image/home/img/img3.jpg', title: 'Blog Home', type: 'development' },
//     { id: 17, imgSrc: '/image/home/img/img6.jpg', title: 'Video Slider', type: 'design' },
//     { id: 18, imgSrc: '/image/home/img/img9.jpg', title: 'Portfolio Interactive', type: 'development' },
// ];

export default function OurPortfolio() {
    // const [currentTab, setCurrentTab] = useState('all');
    const [visibleItems, setVisibleItems] = useState(6);


    const [portfolioData, setPortfolioData] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get(`${BASE_URL}/all-portfolio?organizationId=everything_globel`)

            if (resp?.data?.http_status_code === 200) {
                setloading(false)
                setPortfolioData(resp.data.data)
            }
        }
        fetchData()
    }, [])


    if (loading) {
        return <Loader />
    }

    // const filteredItems = currentTab === 'all' ? portfolioData : portfolioData.filter(item => item.type === currentTab);

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + 6);
    };

    return (
        <div>
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    className={`px-4 py-2 font-semibold relative uppercase`}
                // onClick={() => setCurrentTab('all')}
                >
                    <span className='relative z-10'>Show All</span>
                    {/* <span className='relative z-10'>Show All</span> */}
                    {/* <span className={`port_active ${currentTab === 'all' ? 'block' : 'hidden'}`}>  <svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span> */}
                </button>
                {/* <button
                    className={`px-4 py-2 font-semibold relative  uppercase`}
                    onClick={() => setCurrentTab('development')}
                >
                    <span className='relative z-10'>Web Development</span>
                    <span className={`port_active ${currentTab === 'development' ? 'block' : 'hidden'}`}> <svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span>
                </button>
                <button
                    className={`px-4 py-2 font-semibold relative uppercase`}
                    onClick={() => setCurrentTab('design')}
                >
                    <span className='relative z-10'>Web Design</span>
                    <span className={`port_active ${currentTab === 'design' ? 'block' : 'hidden'}`}>  <svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span>
                </button> */}
            </div>

            {/* Portfolio Items */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-28">
                {portfolioData.slice(0, visibleItems).map(item => (
                    console.log(item),
                    <div key={item.id} className="space-y-3 group cursor-pointer">
                        <Link to={`/portfolio-slug/${item?.id}`}>
                            <div className={`h-full border p-10 space-y-6 border-black bg-[#f0ead8] w-full rounded-[50px] overflow-hidden relative`}>
                                <div className='h-[200px] sm:h-[270px]  w-full'>
                                    <img src={item.banner_image[0]} className="w-full h-full object-cover rounded-3xl" alt={item.title} />
                                    {/* <img src={item.imgSrc} className="group-hover:scale-110 transition-transform duration-300 ease-in-out" alt={item.title} /> */}
                                </div>
                                <div>
                                    <p className='uppercase'>({item.category?.name})</p>
                                    <p className='text-3xl font-semibold'>{item.title}</p>
                                </div>
                            </div>

                        </Link>
                    </div>
                ))}
            </div>

            <div className='mb-6 sm:mb-28'>
                {
                    portfolioData.length > visibleItems && (
                        <div onClick={() => handleLoadMore()}>
                            {/* <Button text="Load More" width="160px" /> */}
                            <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[160px] m-auto text-lg overflow-hidden flex items-center mt-10`}>
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                                <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                                    <GoDotFill className="text-[#f8a065]" />
                                    <span className="sliding-text hidden group-hover:block">Load More</span>
                                    <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                                    <span className="sliding-text hidden group-hover:block">Load More</span>
                                    <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                                    <span className="sliding-text">Load More</span>
                                </div>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
