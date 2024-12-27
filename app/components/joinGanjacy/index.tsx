import React from "react";

const Index = () => {
  return (
    <div className="w-full min-h-[70vh] overflow-hidden">
      <div
        className="w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('./join/ganjacy-join-dispensary-opt.jpg')",
        }}
      >
        <div className="w-full xl:w-[35%] h-full bg-green-800 bg-opacity-90 flex text-center items-center justify-center ">
          <div>
            <h2 className="uppercase text-[40px] font-black text-white m-auto my-10">
              Join Ganjacy Now
            </h2>
            <h3 className="text-[16px] font-black text-white m-auto">
              Lift the burden of online marketing and start driving in-store and
              online sales to new highs. <br /> Join the leading online cannabis
              platform in Thailand for free, today.
            </h3>

            <button className="border-2 rounded-sm text-white hover:bg-white hover:text-green-800 border-white transition-all duration-200 mt-20 p-3 font-bold text-[18px]">
              ADD YOUR DISPENSARY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
