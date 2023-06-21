import React from "react";

const SmallNewsLetter = () => {
  return (
    <div>
      <div className="bg-news p-6 w-100 rounded-lg flex flex-col gap-5 px-10 pb-8">
        <h1 className="text-white font-semibold text-lg text-center mb-5">
          Stay Updated on the Latest Messaging Strategies
        </h1>
        <p className="text-white text-center">
          Receive a monthly roundup of best practices, tips, and trends.
        </p>
        <div className="w-full flex justify-center items-center flex-col gap-5">
          <input
            type="text"
            placeholder="Your Work Email"
            className="w-full h-12 rounded-sm px-4"
          />
          <button className="bg-transparent border border-white rounded-md w-full py-3 text-white font-semibold">
            Subscribe To Newsletter
          </button>
        </div>
        <p className="text-white text-center">
          Want direct access to more helpful content? Subscribe to notifications
          to stay in the loop.
        </p>
        <button className="bg-transparent border border-white rounded-md w-full py-3 text-white font-semibold">
          Subscribe To Newsletter
        </button>
      </div>
    </div>
  );
};

export default SmallNewsLetter;
