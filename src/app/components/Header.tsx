"use client";

import { useCartStore } from "@/store/useCartStore";
import { useModule } from "@/store/useModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const Header = () => {
  const { isOpen, setIsOpen } = useModule();
  const router = useRouter();
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <div>
      <div className="py-4 px-32 flex justify-between items-center border-b border-gray-300">
        <div>
          <img className="w-37.5" src="./logo.svg" alt="" />
        </div>
        <div className="flex gap-8 items-center">
          <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80">
            Seller Dashboard
          </button>
          <ul className="flex gap-8 text-grey700">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="./allproducts">All Product</Link>
            </li>
          </ul>
          <div className="flex gap-2 items-center border text-[14px] border-gray-300 text-gray-600 px-3 py-1 rounded-full">
            <input
              className="placeholder:text-gray-400  outline-0"
              placeholder="Search products"
              type="text"
            />
            <img src="./search.svg" alt="" />
          </div>
          <div className="relative cursor-pointer">
            <img src="./basket.svg" alt="" />
            {cartCount > 0 && (
              <div className="absolute -top-5 -right-16  text-[12px] text-center text-white bg-[#4fbf8b]  w-4.5 h-4.5 rounded-full">
                {cartCount}
              </div>
            )}
          </div>
          <Link href="/shopping">
            {" "}
            <img src="/shop.svg" alt="" />
          </Link>
          <button
            onClick={() => {
              setIsOpen(true);
              console.log(isOpen);
            }}
            className="cursor-pointer px-8 py-2 bg-[#4fbf8b] transition  text-white rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
