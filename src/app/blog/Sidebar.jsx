import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { BASE_URL } from "../../utils/config";
import Loader from "../../component/layout/Loader";

export default function Sidebar() {
  const [categories, setCategories] = useState();

  const [tags, setTags] = useState();
  const [catloading, setCatLoading] = useState(true);
  const [tagloading, setTagLoading] = useState(true);

  useEffect(() => {
    const fetchCatData = async () => {
      const resp = await axios.get(`${BASE_URL}/get-blog-category?organizationId=codeyes_media`);
      if (resp?.data?.http_status_code === 200) {
        setCategories(resp.data.data);
        setCatLoading(false);
      }
    };
    const fetchTagData = async () => {
      const resp = await axios.get(`${BASE_URL}/get-blog-tag?organizationId=codeyes_media`);
      if (resp?.data?.http_status_code === 200) {
        setTags(resp.data.data);
        setTagLoading(false);
      }
    };
    fetchCatData();
    fetchTagData();
  }, []);

  if (catloading) {
    return <Loader />;
  }
  if (tagloading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex flex-col gap-16">
        <div className={`border border-black rounded-3xl overflow-hidden bg-[#d2ebf8] py-10 space-y-5`}>
          <div className="px-[50px] xl:px-[70px]">
            <div className="rounded-full overflow-hidden border border-black ">
              <img src="/image/about/blog-author-img1.jpg" alt="Error" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="space-y-5 px-7 xl:px-14 pb-4">
            <h3 className="text-2xl font-semibold text-center">Alex Johnson</h3>
            <p className="text-[#151015] text-center">Nunc aliquet bibendum enim facilis de gravida.</p>
          </div>
        </div>
        <div className={`border border-black rounded-full overflow-hidden relative`}>
          <input type="text" placeholder="Email..." className="bg-transparent w-full border-0 outline-0 h-full p-6" />
          <button className="border border-r-0 border-black rounded-full bg-[#f8a065] p-2 absolute right-0 h-full w-[65px]">
            <IoSearchSharp className="text-xl m-auto" />
          </button>
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl font-semibold">Categories</h4>
          <div className="space-y-4">
            {categories.map((cat) => {
              return (
                <p className="uppercase hover:text-[#f8a065] cursor-pointer text-sm" key={cat.id}>
                  {cat.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl font-semibold">Recent Post</h4>
          <div className="space-y-4 flex gap-5">
            <div className="w-[80px] rounded-2xl overflow-hidden">
              <img src="/image/about/blog-single-img7.jpg" alt="Error" className="w-full h-full object-contain" />
            </div>
            <div className="">
              <h5 className="text-lg font-semibold">Artist’s Vision</h5>
              <p className="text-[15px]">September 11, 2024</p>
            </div>
          </div>
          <div className="space-y-4 flex gap-5">
            <div className="w-[80px] rounded-2xl overflow-hidden">
              <img src="/image/about/blog-single-img8.jpg" alt="Error" className="w-full h-full object-contain" />
            </div>
            <div className="">
              <h5 className="text-lg font-semibold">Visual Language</h5>
              <p className="text-[15px]">September 11, 2024</p>
            </div>
          </div>
          <div className="space-y-4 flex gap-5">
            <div className="w-[80px] rounded-2xl overflow-hidden">
              <img src="/image/about/blog-single-img9.jpg" alt="Error" className="w-full h-full object-contain" />
            </div>
            <div className="">
              <h5 className="text-lg font-semibold">Our New Projects</h5>
              <p className="text-[15px]">September 11, 2024</p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h4 className="text-3xl font-semibold">Tags</h4>
          <div className="flex gap-4 flex-wrap">
            {tags.map((tag) => {
              return (
                <p className="uppercase border border-black w-fit rounded-full py-1 px-4 hover:bg-[#f8a065] hover:text-white cursor-pointer text-sm" key={tag.id}>
                  {tag.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="h-[350px] w-full rounded-xl overflow-hidden">
          <img src="/image/portfoilo/faq-image.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}
