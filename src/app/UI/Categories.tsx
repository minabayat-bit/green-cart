import React from "react";

const Categories = () => {
  return (
    <div className="p-8 mt-20">
      <h2 className="text-3xl font-bold">Categories</h2>
      <div className="grid grid-rows-1 grid-cols-7 gap-8 px-20 mt-10">
      <div className="group cursor-pointer py-5 gap-2 bg-[#fef6da] rounded-lg flex flex-col justify-center items-center">
        <img className="w-30" src="/vegi.png" alt="" />
        <p className="text-sm font-medium">Organic veggies</p>
      </div>
      <div className="group cursor-pointer py-5 px-3 gap-2 bg-[#fee0e0] rounded-lg flex flex-col justify-center items-center">
        <img className="w-30" src="/fruit.png" alt="" />
        <p className="text-sm font-medium">Fresh Fruits</p>
      </div>
      <div className="group cursor-pointer py-5 px-3 gap-2 bg-[#f0f5de] rounded-lg flex flex-col justify-center items-center">
        <img className="w-30" src="/drinks.png" alt="" />
        <p className="text-sm font-medium">Cold Drinks</p>
      </div>
      <div className="group cursor-pointer py-5 px-3 gap-2 bg-[#e1f5ec] rounded-lg flex flex-col justify-center items-center">
        <img className="w-30" src="/instant.png" alt="" />
        <p className="text-sm font-medium">Instant Food</p>
      </div>
      <div className="group cursor-pointer py-5 px-3 gap-2 bg-[#fee6cd] rounded-lg flex flex-col justify-center items-center">
        <img className="w-30" src="/dairy.png" alt="" />
        <p className="text-sm font-medium">Dairy Products</p>
      </div>
      <div className="group cursor-pointer py-5 px-3 gap-2 bg-[#e0f6fe] rounded-lg flex flex-col justify-center items-center">
        <img className="w-30" src="/bakery.png" alt="" />
        <p className="text-sm font-medium">Bakery and Breads</p>
      </div>
      <div className="group cursor-pointer py-5 px-3 gap-2 bg-[#f1e3f9] rounded-lg flex flex-col justify-center items-center">
        <img className="w-30" src="/grains.png" alt="" />
        <p className="text-sm font-medium">Grains</p>
      </div>
      </div>
    </div>
  );
};

export default Categories;
