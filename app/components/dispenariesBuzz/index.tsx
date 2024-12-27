import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialReddit } from "react-icons/sl";
import { FaEvernote } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";

const Buzz = [
  {
    shopName: "Pakalolo Tha Tian - Cafe | Dispensary | Bar",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: true,
    distance: 12,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
    buzz: `Attention cannabis enthusiasts and connoisseurs! Dive into a world of premium quality and unparalleled variety at Happy Smile Cannabis Cafe Pattaya. Our dedication to ensuring a "Happy Smile Every Time" is now paired with an irresistible offer just for you.

            For a limited time, experience the depth and breadth of our carefully curated cannabis strains with a special treat: Enjoy a 10% discount on all 3.5g purchases. Whether you're a seasoned aficionado or someone new to the cannabis world, this is the perfect opportunity to explore our exceptional offerings while enjoying significant savings.

            Beyond just the quality of our strains, our experienced staff are on hand to guide and assist, ensuring you find the perfect selection tailored to your desires. It's not just about making a purchase; it's about making the right one.

            So, whether you're seeking relaxation, creativity, or simply a new experience, there's never been a better time to indulge and save. Join us at Happy Smile Cannabis Cafe Pattaya, and elevate your cannabis journey with this exclusive promotion. Don't let this offer pass you by; your gateway to a memorable cannabis experience awaits!`,
    buzzImg: "./buzzs/happy-smile-cannabis-cafe-35g-10-ganjacycom-1.jpg.webp",
  },
  {
    shopName: "Kowloon",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: true,
    distance: 12,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
    buzz: `Kowloon Dispensary Soi 7 is running a special promotion for online orders here on Ganjacy.com – buy 3 grams of any cannabis strain and receive 5% off your order when you use voucher code GEMBYTHBEACH5 during checkout. Enjoy the convenience of ordering your cannabis online and get a great deal in the process! Start your journey with Kowloon Dispensary Soi 7 today!`,
    buzzImg: "./buzzs/kowloon-5jpeg.webp",
  },
  {
    shopName: "Elevate",
    description: "Chill, Chat, and Choose at Bangkok's Cannabis Haven",
    status: true,
    distance: 12,
    img: "./shops/pakalolo-tha-tian-cafe-dispensary-bar-2962.jpg.webp",
    link: "",
    buzz: `Now, Elevate is offering a special promotion in January 2024: 1g Agent Orange or Haze Berry for THB 350. This offer is available in-store and online, with voucher code ELEVATEJAN2024. Take advantage of this great deal and stock up on premium cannabis products from Elevate Pattaya. Enter the voucher code during checkout on Ganjacy.com to apply the discount. Don't miss out!`,
    buzzImg: "./buzzs/agent-orange-haze-berry0.jpeg.webp",
  },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-10">
      <h2 className="w-full h-[20vh] flex items-center justify-center text-[20px] xl:text-[40px] uppercase font-black text-green-700 drop-shadow-md mb-10">
        Dispensary buzz
      </h2>

      {Buzz.slice(0, 5).map((shop, index) => (
        <div
          key={index}
          className="w-[90%] xl:w-[50%] border bg-white rounded-lg drop-shadow-md m-auto p-4 mb-10"
        >
          <h2 className="text-lg font-bold text-green-600">{shop.shopName}</h2>

          <h3 className="">{shop.buzz}</h3>

          <img
            src={shop.buzzImg}
            className="w-full mt-4 rounded-md drop-shadow-md"
          />

          <div className="w-full flex items-center justify-center m-auto py-4 gap-2 text-gray-800">
            <FaFacebookF />
            <FaXTwitter />
            <FaWhatsapp />
            <FaLinkedinIn />
            <SlSocialReddit />
            <FaEvernote />
            <MdEmail />
            <FaLink />
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-10">
        <button className="px-4 py-1 bg-gray-50 text-black border drop-shadow-md rounded-full hover:bg-gray-100 hover:scale-125 transition-all duration-400">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Index;
