
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Banner from "../../component/home/Banner";
import Sidebar from "./Sidebar";
import axios from "axios";
import moment from "moment";
import Loader from "../../component/layout/Loader";
import { stripHtml } from "string-strip-html";
import { BASE_URL } from "../../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { addAllBlog, setFirstBlogVisit, setShowBlogs } from "../../utils/blogSlice";

export default function Blog() {
  const dispatch = useDispatch();
  const blogPosts = useSelector((store) => store.blog.showBlogs);
  const firstBlogVisit = useSelector((store) => store.blog.firstBlogVisit);
  // console.log(firstBlogVisit)
  // console.log(blogPosts)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get-blog?organizationId=everything_globel`);
        if (firstBlogVisit) {
          dispatch(addAllBlog(response.data.data));
          dispatch(setShowBlogs(response.data.data));
          dispatch(setFirstBlogVisit());
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog data.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Banner />
      <div className="custom_container my-24">
        <div className="grid grid-cols-12 gap-y-10 w-[90%] m-auto">
          <div className="col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1">
            <Sidebar />
          </div>
          <div className="col-span-12 lg:col-span-1 hidden lg:block"></div>

          <div className="col-span-12 lg:col-span-8">
            <div className="grid gap-8">
              {blogPosts.map((post) => {
                const parsedContent = post?.content ? stripHtml(post.content).result : "";

                const limitedContent = parsedContent.split(" ").slice(0, 150).join(" ") + (parsedContent.split(" ").length > 150 ? "..." : "");
                // const limitedTitle = post?.title?.length > 25 ? post?.title.substring(0, 25) + "..." : post?.title;
                // console.log(post)
                return (
                  <div key={post.id} className="space-y-4">
                    <Link to={`/post/${post.id}`}>
                      <div className="relative h-[500px] rounded-2xl overflow-hidden">
                        {console.log(post?.title + "  " + post.banner_image)}
                        <img src={post.banner_image} alt={post?.title} className="h-full object-cover w-full" />
                        <div className="border border-black rounded-xl bg-[#f8a065] absolute top-6 left-6 p-2 w-min text-center">
                          <h4 className="text-2xl font-semibold">{post?.createdAt ? moment(post?.createdAt).format("DD MMM") : null}</h4>
                        </div>
                      </div>
                      <div className="space-y-2 py-4 lg:py-8">
                        <p className="uppercase">({post?.category?.name})</p>
                        <h2 className="capitalize text-2xl sm:text-3xl lg:text-5xl font-semibold">{post?.title}</h2>
                        <p>{limitedContent}</p>
                        <button className="relative border border-black rounded-full font-semibold px-3 py-2 group hover:px-0 duration-100 ease-in-out cursor-pointer uppercase w-[160px] text-lg overflow-hidden flex items-center mt-10">
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
                          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                          <div className="flex items-center whitespace-nowrap relative z-10">
                            <GoDotFill className="text-[#f8a065] mr-2" />
                            <span>Read More</span>
                          </div>
                        </button>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
