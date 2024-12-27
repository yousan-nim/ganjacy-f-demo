import React from "react";

const articls = [
  {
    textHead: "The Ultimate Guide to Mouth Swab Drug Tests for Weed",
    articlesImg: "./articles/1.webp",
    ariticleLink: "",
  },
  {
    textHead:
      "Statewide Medical Cannabis Legalization Linked to Reduced Opioid Deaths: Study",
    articlesImg: "./articles/2.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring CBD as a Potential Treatment for Alopecia Areata",
    articlesImg: "./articles/3.webp",
    ariticleLink: "",
  },
  {
    textHead: "Enhancing Your Brunch with Cannabis-Infused Recipes",
    articlesImg: "./articles/4.webp",
    ariticleLink: "",
  },
  {
    textHead: "The cannabis basics that every user should know",
    articlesImg: "./articles/5.webp",
    ariticleLink: "",
  },
  {
    textHead:
      "Snoop Dogg's Change of Heart - Quitting Smoking Pot for Health and Clarity",
    articlesImg: "./articles/9.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring the Psychedelic Effects of Cannabis: Study Findings",
    articlesImg: "./articles/6.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring the World of Cannabis Dining",
    articlesImg: "./articles/7.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring the Cannabis Scene in Berlin",
    articlesImg: "./articles/8.webp",
    ariticleLink: "",
  },
  {
    textHead:
      "The Art of Cannabis Pairing: Enjoying a Memorable Dining Experience",
    articlesImg: "./articles/10.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring the Benefits of Cannabis Edibles",
    articlesImg: "./articles/11.webp",
    ariticleLink: "",
  },
  {
    textHead:
      "Manage Your Cannabis Expenses: Strategies for Tracking, Budgeting, and Saving Money",
    articlesImg: "./articles/12.webp",
    ariticleLink: "",
  },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-10">
      <h2 className="w-full h-[20vh] flex items-center justify-center text-center px-2 xl:px-0 text-[20px] xl:text-[40px] uppercase font-black text-green-700 drop-shadow-md">
        Articles on Cannabis Health and Culture
      </h2>

      <div className="w-[90%] xl:w-[60%] h-auto m-auto grid grid-cols-6 gap-6">
        {articls.slice(0, 12).map((article, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg p-2 border col-span-6 xl:col-span-2 relative rounded-xl flex flex-col justify-between hover:scale-110 transition-all duration-400"
          >
            <h2 className="mb-2 font-bold text-lg">{article.textHead}</h2>

            <img
              src={article.articlesImg}
              className="object-cover w-full h-[150px] mt-auto rounded-md"
              alt={article.textHead}
            />
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
