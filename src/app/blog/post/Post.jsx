// import React from 'react'
// import { GoDotFill } from 'react-icons/go'
// import { Link } from 'react-router-dom';
// import Banner from '../../../component/home/Banner';
// import Sidebar from '../Sidebar';

// const blogPosts = [
//     {
//         id: 1,
//         image: '/image/home/blog1.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Vol  uptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 2,
//         image: '/image/home/blog2.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 3,
//         image: '/image/home/blog3.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 4,
//         image: '/image/home/blog1.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 5,
//         image: '/image/home/blog2.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 6,
//         image: '/image/home/blog3.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 7,
//         image: '/image/home/blog1.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 8,
//         image: '/image/home/blog2.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 9,
//         image: '/image/home/blog3.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 10,
//         image: '/image/home/blog1.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 11,
//         image: '/image/home/blog2.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 12,
//         image: '/image/home/blog3.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
// ];

// export default function Blog() {
//     return (
//         <>
//             <Banner />
//             <div className="custom_container my-24">
//                 {/* <h2 className="uppercase text-6xl md:text-[90px] md:leading-[100px] font-extrabold">
//                     Latest <span style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>BLOGS</span>
//                 </h2> */}
//                 <div className={`grid grid-cols-12 gap-y-10 w-[90%] m-auto`}>
//                     <div className='col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1'>
//                         <Sidebar />
//                     </div>
//                     <div className='col-span-12 lg:col-span-1 hidden lg:block'></div>

//                     <div className='col-span-12 lg:col-span-8'>
//                         <div className="grid">
//                             {blogPosts.map((post) => (
//                                 <div key={post.id} className="space-y-4">
//                                     <Link to={`/post/${post.id}`} >
//                                         <div className="relative h-[500px] rounded-2xl overflow-hidden">
//                                             <img src={post.image} alt={`blog${post.id}`} className="h-full object-cover w-full" />
//                                             <div className="border border-black rounded-xl bg-[#f8a065] absolute top-6 left-6 p-2 w-min text-center">
//                                                 <h4 className="text-2xl font-semibold">{post.date}</h4>
//                                             </div>
//                                         </div>
//                                         <div className="space-y-2 py-4 lg:py-8">
//                                             <p className="uppercase ">({post.category})</p>
//                                             <h2 className="capitalize text-2xl sm:text-3xl lg:text-5xl font-semibold">{post.title}</h2>
//                                             <p>{post?.content}</p>
//                                             <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[160px]  text-lg overflow-hidden flex items-center mt-10`}>
//                                                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
//                                                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
//                                                 <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
//                                                     <GoDotFill className="text-[#f8a065]" />
//                                                     <span className="sliding-text hidden group-hover:block">Read More</span>
//                                                     <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
//                                                     <span className="sliding-text hidden group-hover:block">Read More</span>
//                                                     <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
//                                                     <span className="sliding-text">Read More</span>
//                                                 </div>
//                                             </button>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>

//     );
// }












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
    }, [newCommentId]);


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
            <div className='space-y-5'>
                <div className={`w-full h-[500px]`}>
                    <img src="/image/home/blog2.jpg" alt="Error" className='w-full h-full object-cover' />
                </div>
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
