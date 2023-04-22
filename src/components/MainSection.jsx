import BigBlogCard from "./BigBlogCard";
import { blogs } from "../assets/blogs.json";
import BlogCard from "./BlogCard";
import NewsLetter from "./NewsLetter";

const MainSection = () => {
  const [topBlog] = blogs.filter((blog) => blog.tags[0] === "top");
  // arr.slice(Math.max(arr.length - 5, 1))
  const latestBlog = blogs.slice(Math.max(blogs.length - 6, 1));
  const messageBlog = blogs.filter(
    (blog, index) =>
      (((blog.tags.length > 1 && blog.tags[1] === "messaging stratagy") ||
      blog.tags[0] === "messaging stratagy"))
  );
  const featureBlog = blogs.filter(
    (blog, index) =>
      (((blog.tags.length > 1 && blog.tags[1] === "features & updates") ||
      blog.tags[0] === "features & updates"))
  );

  return (
    <>
    <div className="min-h-screen flex justify-center lg:px-0 md:px-0 px-3 font-nunito">
      <div className="lg:w-2/3 md:w-4/5 w-full py-6">
        <BigBlogCard blog={topBlog} />
        <h1 className="text-link text-2xl font-bold lg:pl-16 mb-6">
          Latest Article
        </h1>
        <div className="flex flex-col lg:flex-wrap md:flex-wrap lg:flex-row md:flex-row gap-5 justify-center">
          {latestBlog.map((blog, index) => {
            return <BlogCard blog={blog} key={index} />;
          })}
        </div>
        <h1 className="text-link text-2xl font-bold lg:pl-16 mb-4">
          Messaging Strategy
        </h1>
        <div className="mb-6 lg:px-8 md:px-4">
          <BigBlogCard blog={messageBlog[0]} />
        </div>
        <div className="flex flex-col lg:flex-wrap md:flex-wrap lg:flex-row md:flex-row gap-5 justify-center">
          {messageBlog.map((blog, index) => {
            return <BlogCard blog={blog} key={index} />;
          })}
        </div>
        <h1 className="text-link text-2xl font-bold lg:pl-16 mb-6">
          Features & Updates
        </h1>
        <div className="mb-6 lg:px-8 md:px-4">
          <BigBlogCard blog={featureBlog[0]}/>
        </div>
        <div className="flex flex-col lg:flex-wrap md:flex-wrap lg:flex-row md:flex-row gap-5 justify-center">
          {featureBlog.map((blog, index) => {
            if (index != 0) return <BlogCard blog={blog} key={index} />;
          })}
        </div>
      </div>

    </div>
    <div>
    <NewsLetter/>
    </div>
    </>
  );
};

export default MainSection;
