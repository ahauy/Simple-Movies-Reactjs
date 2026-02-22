import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MoviesCard = ({ item }) => {
  return (
    <div className="movie-card flex flex-col p-5 bg-slate-800 rounded-lg select-none h-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt=""
        className="w-full h-[300px] object-cover rounded-xl mb-5"
      />
      <div className="flex flex-col flex-1">
        <h2 className="text-xl font-bold mb-3">{item.title}</h2>
        <div className="flex items-center justify-between mb-3">
          <span className="opacity-40">
            {item.release_date
              ? new Date(item.release_date).getFullYear()
              : "N/A"}
          </span>
          <span>
            <span className="opacity-40">
              {parseFloat(item.vote_average).toFixed(2)}
            </span>{" "}
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "rgb(255, 212, 59)" }}
            />
          </span>
        </div>
        <button className="w-full px-6 py-4 bg-primary rounded-xl mt-auto">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;

// adult: false

// backdrop_path: "/AecGG1XVCmkk7fT10ko3FC0dLIP.jpg"

// genre_ids: [14, 28, 53] (3)

// id: 1043197

// original_language: "en"

// original_title: "Dust Bunny"

// overview: "Một sát thủ bảo vệ cô bé tin rằng gia đình mình bị quái vật giết hại, và dần nhận ra những nỗi sợ trẻ con có thể là sự thật."

// popularity: 57.6918

// poster_path: "/vobigFZFvbYPf6ElYJu07P9rH8C.jpg"

// release_date: "2025-12-11"

// title: "Quái Vật Dưới Gầm Giường"

// video: false

// vote_average: 6.665

// vote_count: 174
