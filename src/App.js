import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 text-2xl font-semibold">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[500px]">
        <div className="w-full h-full rounded-lg relative">
          <div className=" overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <img
            src="https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/MM-037%20Avengers_%20Endgame.jpg?itok=xFl6RG_3"
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="absolute w-full left-5 bottom-5">
            <h2 className="font-bold text-[34px] text-white mb-5">Avengers: Endgame</h2>
            <div className="flex justify-start items-center gap-x-5 mb-5">
              <span className="px-4 py-2 border boder-white rounded-lg text-white">Action</span>
              <span className="px-4 py-2 border boder-white rounded-lg text-white">Action</span>
              <span className="px-4 py-2 border boder-white rounded-lg text-white">Action</span>
            </div>
            <button className="px-5 py-3 text-white bg-primary rounded-lg font-semibold mb-5">Watch Now</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
