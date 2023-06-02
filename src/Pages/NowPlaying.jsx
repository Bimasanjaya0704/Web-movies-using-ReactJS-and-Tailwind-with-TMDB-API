import React, { useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { getNowPlayingList } from "../Api.js";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getNowPlayingList().then((result) => {
      setNowPlayingMovies(result);
    });
  }, []);

  const nowPlayingList = () => {
    return nowPlayingMovies.map((movie, i) => {
      return (
        <div
          className=" w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 2xl:w-1/12 px-2 mb-6"
          key={i}
        >
          <div className="bg-inherit shadow-md shadow-light rounded-lg overflow-hidden">
          <div className="relative">
              <div className="group cursor-pointer">
                <Link to="/watchmovie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    className="w-full object-cover transition-opacity duration-300 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center justify-center">
                      <AiFillPlayCircle className="h-12 w-12 text-primary " />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-start justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h2 className="text-light text-sm font-semibold pt-2 px-2 text-center">
                      {movie.title}
                    </h2>
                  </div>
                  <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-xs italic text-light font-light bg-red-600 px-3 py-1 rounded-full mb-2">
                      Rate : {movie.vote_average}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center py-2 gap-2">
            <Link to="/watchmovie"><button className="bg-psecond font-normal text-xs sm:text-sm text-light px-2 py-1 md:px-4 md:py-2 rounded-lg hover:opacity-90">
                Watch
              </button></Link>
              <Link to="/download"><button className="bg-psecond font-normal text-xs sm:text-sm text-light px-2 py-1 md:px-4 md:py-2 rounded-lg hover:opacity-90 inline-flex items-center">
                <svg
                  className="fill-current h-3 w-3 md:w-4 md:h-4 mr-1 sm:mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Download
              </button></Link>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-second px-6 pb-4 mb-10">
        <div className="font-semibold text-base text-primary py-3">
        <div className="text-sm md:text-base lg:text-xl">
  <div className="flex items-center">
    <hr className="border-primary flex-grow" />
    <div className="mx-4">Now Playing</div>
    <hr className="border-primary flex-grow" />
  </div>
</div>
          
        </div>
        <div className="flex flex-wrap mt-4 -mx-2">{nowPlayingList()}</div>
        <div className="flex justify-center">
          <button className="bg-light text-psecond font-semibold text-sm px-4 py-2 rounded-full hover:opacity-80">Load More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NowPlaying;
