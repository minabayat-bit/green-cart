import React from "react";

const Deal = () => {
  return (
    <div className=" p-10">
      <div className="relative">
        <img className="p-25 " src="/banner2.png" alt="" />
        <div className="absolute top-1/3 right-1/5 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#4fbf8b] mb-6">
            Why We Are the Best?
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <img className="md:w-11 w-9" src="/truck.svg" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Fastest Delivery
              </h3>
              <p className="text-gray-500/70 text-xs md:text-sm">
                Groceries delivered in under 30 minutes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <img className="md:w-11 w-9" src="/leaf.svg" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Freshness Guaranteed
              </h3>
              <p className="text-gray-500/70 text-xs md:text-sm">
                Fresh produce straight from the source.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <img className="md:w-11 w-9" src="/coin.svg" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Affordable Prices
              </h3>
              <p className="text-gray-500/70 text-xs md:text-sm">
                Quality groceries at unbeatable prices.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <img className="md:w-11 w-9" src="/trust.svg" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Trusted by Thousands
              </h3>
              <p className="text-gray-500/70 text-xs md:text-sm">
                Loved by 10,000+ happy customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center p-10">
        <h2 className="text-4xl font-semibold text-gray-800">
          Never Miss a Deal!
        </h2>
        <p className="text-gray-500 font-medium text-[20px]">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
        <div className="relative">
          <input
            className=" border border-gray-500/30 py-3 text-[20px] rounded-md h-full outline-none w-150 rounded-r-none px-3 text-gray-500"
            placeholder="Enter your email id"
            type="text"
          ></input>
          <button className="px-8 py-3 bg-[#4fbf8b] text-white text-[20px] absolute top-1 right-0">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deal;
