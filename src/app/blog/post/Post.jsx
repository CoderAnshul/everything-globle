
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import CommentForm from './CommentForm'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import CommentSection from './Commnet'
import ProfileCard from './ProfileCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Loader from '../../../component/layout/Loader'
import { BASE_URL } from '../../../utils/config'
import { useSelector } from 'react-redux'
import {LinkedinShareButton,TwitterShareButton,
    FacebookShareButton} from "react-share"

export default function Post() {
  
    const { id } = useParams()
    const newCommentId=useSelector(store=> store.blog.newAddedCommentId)


    const [blogPosts, setBlogData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/get-blog/${id}`);
                setBlogData(response.data.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch blog data.");
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [newCommentId,id]);


    const currentPageUrl = window.location.href;
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>{error}</div>;
    }
console.log(blogPosts)
    return (
        <>
            <div className='space-y-5 mt-10'>
                {/* <div className={`w-full h-[500px]`}>
                    <img src="/image/home/blog2.jpg" alt="Error" className='w-full h-full object-cover' />
                </div> */}
                <div className={`grid grid-cols-12 gap-y-10 w-[90%] m-auto`}>
                    <div className='col-span-12 lg:col-span-8'>
                        <div className="grid">
                            <div className="space-y-4">
                                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                                    <img src={blogPosts?.banner_image} alt={blogPosts?._id} className="h-full object-cover w-full" />
                                    <div className="border border-black rounded-xl bg-[#f8a065] absolute top-6 left-6 p-2 w-min text-center">
                                        <h4 className="text-2xl font-semibold">{blogPosts?.createdAt ? moment(blogPosts?.createdAt).format("DD MMM") : null}</h4>
                                    </div>
                                </div>
                                <div className="space-y-2 py-4 lg:py-8">
                                    <p className="uppercase ">({blogPosts?.category?.name})</p>
                                    <h2 className="capitalize text-2xl sm:text-3xl lg:text-5xl font-semibold">{blogPosts?.title}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: blogPosts?.content }}></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between flex-wrap gap-x-4 gap-4 mt-6'>
                            <div className='flex gap-3'>
                                {
                                    blogPosts && blogPosts.tags && blogPosts?.tags?.map((item, index) => {
                                        return (
                                            <p className='border border-black rounded-[50px] px-4 w-fit py-1' key={index}>{item}</p>
                                        )
                                    })
                                }
                                {/* <p className='border border-black rounded-[50px] px-4 w-fit py-1'>cool</p>
                                <p className='border border-black rounded-[50px] px-4 w-fit py-1'>design</p> */}
                            </div>
                            {/* <div className="custom_tool_tip z-20 text-xl px-6 font-semibold relative  border border-black p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg" >
                                <div className='flex gap-4'>
                                    <div className={`hover:text-[#f8a065] text-sm cursor-pointer`}><FaLinkedin /></div>
                                    <div className={`hover:text-[#f8a065] text-sm cursor-pointer `}><FaFacebook /></div>
                                    <div className={`hover:text-[#f8a065] text-sm cursor-pointer `}><FaTwitter /></div>
                                    <div className={`hover:text-[#f8a065] text-sm cursor-pointer`}><FaInstagram /></div>
                                </div>
                            </div> */}
                             <div className="custom_tool_tip z-20 text-xl px-6 font-semibold relative  border border-black p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg" >
                                <div className='flex gap-4'>
                                  <LinkedinShareButton url={currentPageUrl}  >  <div className={`hover:text-[#f8a065] text-sm cursor-pointer`}><FaLinkedin /></div></LinkedinShareButton>
                                   <FacebookShareButton url={currentPageUrl} quote="Please share this post" hashtag='#codeyes'> <div className={`hover:text-[#f8a065] text-sm cursor-pointer `}><FaFacebook /></div></FacebookShareButton>
                                   <TwitterShareButton url={currentPageUrl}> <div className={`hover:text-[#f8a065] text-sm cursor-pointer `}><FaTwitter /></div></TwitterShareButton>
                                    {/* <div className={`hover:text-[#f8a065] text-sm cursor-pointer`}><FaInstagram /></div> */}
                                </div>
                            </div>
                        </div>
                        <ProfileCard
                            name={blogPosts.authorName}
                            role={blogPosts.authorRole   }
                            description={blogPosts.authorDescription     }
                            imageUrl={blogPosts.authorProfile   }
                        />
                        <CommentSection blogPosts={blogPosts}  />
                        <CommentForm />
                    </div>
                    <div className='col-span-12 lg:col-span-1 hidden lg:block'></div>
                    <div className='col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1'>
                        <Sidebar />
                    </div>

                </div>
            </div >

        </>
    )
}
