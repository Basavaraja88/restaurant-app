import React from "react";

function Navbar() {
  return (
    <div className=" h-[60px] items-center bg-orange-100 flex shadow-md justify-between px-[70px]">
      <p className=" font-bold text-pink-700 text-[30px]">MK-RESTAURANT</p>
      <button className=" space-x-2 font-medium text-[20px] text-pink-900">
        <span>Orders</span>
        <span>0</span>
      </button>
    </div>
  );
}

export default Navbar;
