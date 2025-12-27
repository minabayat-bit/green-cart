"use client";

import Products from "@/app/allproducts/ui/Products";
import { useCartStore } from "@/store/useCartStore";

const ShoppingCart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.02;
  const total = subtotal + tax;

  return (
    <div className="bg-white min-h-screen flex justify-center py-10 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            Shopping Cart{" "}
            <span className="text-green-600 text-base font-normal">
              0 Items
            </span>
          </h1>
          <div className="flex justify-around text-gray-600 font-semibold mb-6">
            <div className="w-2/3">Product Details</div>
            <div className="w-1/6 text-center">Subtotal</div>
            <div className="w-1/6 text-center">Action</div>
          </div>

          {cart.map((item, index) => (
            <div
              key={`${item._id}-${index}`}
              className="flex justify-around text-gray-600 font-semibold mb-6"
            >
              <img className="w-20" src={item.image?.[0]} alt="" />
              
              <div className="w-1/6 text-center">{item.price}</div>
              <div
                onClick={() => removeFromCart(item._id)}
                className="w-1/6 text-center cursor-pointer"
              >
                clear
              </div>
            </div>
          ))}

          <a
            href="#"
            className="text-green-600 inline-flex items-center gap-1 font-medium hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div className="w-full max-w-sm bg-gray-50 p-6 border border-gray-200 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
            Order Summary
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-1">
              DELIVERY ADDRESS
            </h3>
            <p className="text-gray-500 mb-1">No address found</p>
            <a href="#" className="text-green-600 font-medium hover:underline">
              Change
            </a>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-1">PAYMENT METHOD</h3>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
              disabled
            >
              <option>Cash On Delivery</option>
            </select>
          </div>

          <div className="border-t border-gray-300 pt-4 text-gray-700 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Price</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600 text-sm font-medium">
              <span>Shipping Fee</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax (2%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total Amount:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
