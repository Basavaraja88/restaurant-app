import React, { useState } from "react";

function Filter() {
  const items = [
    "All Items",
    "Starters",
    "Pizza",
    "Roti",
    "Gravy",
    "Rice items",
    "Soft Drinks",
    "Ice creems",
  ];
  const [filter, setFilter] = useState("All Items");

  return (
    <div className=" text-[20px] flex justify-center items-center space-x-2">
      <p>Filter :</p>
      <select name="filter" onChange={(e) => setFilter(e.target.value)}>
        {items.map((item, index) => {
          return (
            <option
              key={index}
              className=" border border-slate-700"
              value={item}
            >
              {item}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => console.log("item", filter)}
        className=" bg-red-300 hover:bg-red-400  w-[120px] h-[35px] rounded-md "
      >
        Submit
      </button>
    </div>
  );
}

export default Filter;
