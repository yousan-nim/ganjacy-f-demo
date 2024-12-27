import React from "react";

const ShopNear = [
  {
    shopName: "Pakalolo Tha Tian - Cafe | Dispensary | Bar",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: true, // true = open, false = closed
    distance: 12,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
  },
  {
    shopName: "Pakalolo Tha Tian - Cafe | Dispensary | Bar",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: true, // true = open, false = closed
    distance: 14,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
  },
  {
    shopName: "Pakalolo Tha Tian - Cafe | Dispensary | Bar",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: false, // true = open, false = closed
    distance: 15,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
  },
  {
    shopName: "Pakalolo Tha Tian - Cafe | Dispensary | Bar",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: true, // true = open, false = closed
    distance: 16,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
  },
  {
    shopName: "Pakalolo Tha Tian - Cafe | Dispensary | Bar",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: false, // true = open, false = closed
    distance: 18,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
  },
  {
    shopName: "Pakalolo Tha Tian - Cafe | Dispensary | Bar",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: false, // true = open, false = closed
    distance: 18,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
  },
  {
    shopName: "Pakalolo Tha Tian - Cafe | Dispensary | Bar",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: false, // true = open, false = closed
    distance: 18,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
  },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <h2 className="w-full h-[20vh] flex items-center justify-center text-[20px] xl:text-[40px] uppercase font-black text-green-700 drop-shadow-md">
        Verified dispensaries near you
      </h2>

      {/* Shop List */}
      <div className="w-[90%] xl:w-[40%] h-auto m-auto rounded-lg border overflow-y-auto drop-shadow-md">
        {ShopNear.slice(0, 5).map((shop, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg p-2 border grid grid-cols-6 relative"
          >
            {/* Image and Status */}
            <div className="col-span-1 flex flex-col items-center justify-center">
              <img
                src={shop.img}
                alt={shop.shopName}
                className="m-auto rounded-full p-2"
              />
              <span
                className={`px-3 py-1 mt-0 rounded-full text-white text-sm ${
                  shop.status ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {shop.status ? "Open" : "Closed"}
              </span>
            </div>

            {/* Shop Details */}
            <div className="col-span-5">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {shop.shopName}
              </h3>
              <p className="text-gray-600 mb-4">{shop.description}</p>

              {/* Distance */}
              <div className="absolute top-0 right-0 p-4 pt-2 text-gray-500">
                {shop.distance} km
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-4 py-1 bg-gray-50 text-black border drop-shadow-md rounded-full hover:bg-gray-100 hover:scale-125 transition-all duration-400">
          More
        </button>
      </div>
    </div>
  );
};

export default Index;
