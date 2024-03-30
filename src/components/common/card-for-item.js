import React from "react";
import { AllDetails } from "../API/alldetail";

function CardForItem() {
  //   const { id, category, name, price, url } = AllDetails;

  return (
    <div className=" mt-[50px] flex space-x-[50px] mx-auto container justify-center">
      {AllDetails.map((details) => {
        return (
          <div className=" pt-[20px] mb-7 space-y-4 items-center w-[300px] h-[350px] border border-lime-200 ">
            {/* <div className="!w-[220px] mx-auto !h-[250px] "> */}{" "}
            <img
              className=" mx-auto"
              src={details.url}
              width={220}
              height={250}
            />
            {/* </div> */}
            <p className=" text-center text-[20px]">{details.name}</p>
            <p className=" text-center text-[20px]">Rs.{details.price}</p>
            <button
              // onClick={() => console.log("item", filter)}
              className="ml-[90px] bg-red-300 hover:bg-red-400  w-[120px] h-[35px] rounded-md "
            >
              Order now
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CardForItem;
