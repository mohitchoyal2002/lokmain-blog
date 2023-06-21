import React from "react";
import { useLocation } from "react-router-dom";
import SmallNewsLetter from "../components/SmallNewsLetter";
import NewsLetter from "../components/NewsLetter";
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

const BlogPage = () => {
  const { state } = useLocation();
  const { blog } = state;
  return (
    <div className="w-full min-h-screen flex flex-wrap gap-10 py-10 font-nunito justify-center px-4">
      <div className="w-full px-6 lg:w-3/5 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <div>
            <span className="border border-tag py-1 px-2 rounded-md text-xs text-tag capitalize ">
              {blog.tags.length === 2 ? blog.tags[1] : blog.tags[0]}
            </span>
          </div>
          <h1 className="text-6xl font-bold text-footer">{blog.title}</h1>
          <div className="w-full flex items-center justify-between px-2">
            <div className="w-full flex items-center gap-10">
              <span className="text-author text-base font-semibold">
                {blog.author}
              </span>
              <span className="text-gray-300 text-3xl">|</span>
              <span className="text-base font-semibold text-gray-500">
                {blog.time} Min Read
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="rounded-full p-2 text-author border border-gray-300 cursor-pointer">
                <FaLinkedinIn/>
              </div>
              <div className="rounded-full p-2 text-author border border-gray-300 cursor-pointer">
                <AiOutlineTwitter/>
              </div>
              <div className="rounded-full p-2 text-author border border-gray-300 cursor-pointer">
                <FaFacebookF/>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img src={blog.image} alt="" className="w-full" />
          </div>
        </div>
        <div>
          <p className="text-main text-lg font-medium">{blog.discription}</p>
        </div>
      </div>
      <div>
        <div className="hidden lg:block">
          <SmallNewsLetter />
        </div>
        <div className="block w-screen -mb-10 lg:hidden">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
