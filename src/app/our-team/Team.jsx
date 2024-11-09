import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineFacebook } from 'react-icons/md';
import { BASE_URL } from '../../utils/config';
import Loader from '../../component/layout/Loader';

export default function Team() {

    const [portfolioData, setPortfolioData] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get(`${BASE_URL}/all-our-team?organizationId=everything_globel`)

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

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {portfolioData.map((item, index) => (
                    console.log("item", item),

                    <div
                        key={index}
                        className='col-span-1 rounded-[50px] overflow-hidden border border-black relative product-card group'
                    >
                        <div className='relative'>
                            <div className='p-10'>
                                <img
                                    src={item?.image_url}
                                    alt='team-member'
                                    title='team-member'
                                    className="w-full h-full object-cover product-image rounded-2xl"
                                />
                            </div>

                            <div className='qodef-social-icon '>
                                <span className="qodef-social-dot group-hover:hidden">...</span>
                                <div className='flex items-center gap-2 absolute right-0 opacity-0 group-hover:opacity-100 group-hover:right-[5px] transition-all duration-300 ease-in-out'>
                                    <a href={item?.linkedin_link}><FaLinkedin className='text-xl' /></a>
                                    <a href={item?.facebook_link}><MdOutlineFacebook className='text-xl' /></a>
                                    <a href={item?.twitter_link}><FaTwitter className='text-xl' /></a>
                                    <a href={item?.instagram_link}><FaInstagram className='text-xl' /></a>
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
                                    <h5 className='text-2xl lg:text-xl xl:text-2xl font-medium'>{item?.name}</h5>
                                    <p className='uppercase text-[#151015]'>({item?.position})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    );
}
