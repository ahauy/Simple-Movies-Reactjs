import React from "react";

const BannerItem = ({ item }) => {
  const { title, poster_path } = item;
  return (  
    <div className="w-full h-full rounded-lg relative">
      <div className=" overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt=""
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute w-full left-5 bottom-5">
        <h2 className="font-bold text-[34px] text-white mb-5">
          {item.title}
        </h2>
        <div className="flex justify-start items-center gap-x-5 mb-5">
          <span className="px-4 py-2 border boder-white rounded-lg text-white">
            Action
          </span>
          <span className="px-4 py-2 border boder-white rounded-lg text-white">
            Action
          </span>
          <span className="px-4 py-2 border boder-white rounded-lg text-white">
            Action
          </span>
        </div>
        <button className="px-5 py-3 text-white bg-primary rounded-lg font-semibold mb-5">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
