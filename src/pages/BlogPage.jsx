import React from "react";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
  const { state } = useLocation();
  const { blog } = state;

  console.log(blog);

  return (
    <div className="min-h-screen flex flex-wrap gap-10 py-10 font-nunito justify-center px-4">
      <div className="w-3/5">
        <span className="border border-tag py-1 px-2 rounded-md text-xs text-tag capitalize ">
          {blog.tags.length === 2 ? blog.tags[1] : blog.tags[0]}
        </span>
        <h1 className="text-4xl font-bold text-footer mt-6">{blog.title}</h1>
      </div>
      <div>
        <div className="bg-news p-6 w-100">
          <h1 className="text-white font-semibold text-lg text-center">
            Stay Updated on the Latest Messaging Strategies
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
