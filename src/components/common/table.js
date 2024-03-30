import React, { useState } from "react";

function Table() {
  const tableNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [select, setSelect] = useState(null);
  console.log("select", select);
  return (
    <div>
      <p className=" text-[35px] font-semibold text-center">
        Please Select Your Table Number
      </p>
      <div className=" flex justify-center space-x-[50px] my-[20px]">
        {tableNo.map((table) => {
          return (
            <div key={table}>
              <button
                onClick={() => setSelect(table)}
                className={
                  select === table
                    ? "bg-orange-300  cursor-pointer text-center w-[30px] h-[25px] border border-neutral-600 rounded-md"
                    : " hover:bg-orange-200 cursor-pointer text-center w-[30px] h-[25px] border border-neutral-600 rounded-md"
                }
              >
                {table}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
