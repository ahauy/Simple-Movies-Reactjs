import React from "react";

const CastCard = ({ item }) => {
  return (
    <div className="card-cast w-full h-full select-none relative group">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end translate-y-[100%] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-center text-2xl font-semibold mb-7">{item.name}</h3>
      </div>
      <img
        className="w-full h-full object-cover rounded-xl"
        src={`https://image.tmdb.org/t/p/original/${item.profile_path}}`}
        alt=""
      />
    </div>
  );
};

export default CastCard;
