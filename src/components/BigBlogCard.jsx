import React from "react";
import { useNavigate } from "react-router-dom";

const BigBlogCard = ({ blog }) => {

  const navigate = useNavigate()

  const open = ()=>{
    navigate('/blog', {state:{blog: blog}})
  }

  return (
    <div className="w-full flex flex-col lg:flex-row md:flex-row rounded-xl shadow-xl font-nunito mb-16 bg-white cursor-pointer hover:shadow-2xl" onClick={open}>
      <img
        src={blog.image}
        alt=""
        className="w-full lg:w-1/2 md:w-1/2 sm:rounded-t-xl xs:rounded-t-xl lg:rounded-l-xl md:rounded-l-xl"
      />
      <div className="p-3 lg:p-6 md:p-4 flex flex-col gap-5">
        <div>
          <span className="border border-tag py-1 px-2 rounded-md text-xs text-tag capitalize hover:bg-tag hover:text-white cursor-pointer ">
            {blog.tags.length === 2 ? blog.tags[1]: blog.tags[0]}
          </span>
        </div>
        <h1 className="text-link text-xl lg:text-3xl md:text-3xl font-bold">{blog.title}</h1>
        <p className="text-gray-500 text-base lg:text-lg md:text-lg font-normal">
          {blog.preview}
        </p>
        <span className="text-xs text-gray-500">{`${blog.time} min`}</span>
      </div>
    </div>
  );
};

export default BigBlogCard;
