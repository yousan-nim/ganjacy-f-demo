import React from "react";

const Index = () => {
  return (
    <div className="w-full h-[86vh] bg-green-700 shadow-inner flex flex-col justify-between">
      {/* Header Image */}
      <img
        src="./header/GanjacyHeader.png"
        className="m-auto pt-18"
        alt="Header"
      />

      <h1 className="w-full text-center text-[28px] leading-7 xl:text-[46px] xl:leading-10 uppercase font-black  pt-0 text-white">
        Order quality cannabis products <br />
        from verified dispensaries in Thailand
      </h1>

      {/* White Box moved to bottom */}
      <div className="w-[90%] xl:w-[40%] h-auto bg-white shadow-lg m-auto mb-10 rounded-xl border">
        <div className="w-full m-auto flex items-center py-10 ">
          <button className="min-w-[40%] py-2 px-4 text-[20px] text-white uppercase font-bold bg-green-600 hover:bg-green-500 rounded-md m-auto shadow-lg">
            order ween
          </button>
        </div>
        <div className="w-full text-center text-lg font-thin py-4 pt-0 text-gray-600">
          Or browse all nearby cannabis products.
        </div>
      </div>
    </div>
  );
};

export default Index;
