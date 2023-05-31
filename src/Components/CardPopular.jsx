import React, { useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { getPopularList } from "../Api.js";

const CardPopular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const popularList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div
        className="w-full px-2 mb-6"
        key={i}
      >
        <div className="bg-inherit shadow-md shadow-light rounded-lg overflow-hidden">
          <div className="relative">
            <div className="group hover:opacity-40 transition-opacity duration-300">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a href="#">
                  <AiFillPlayCircle className="h-12 w-12 text-primary" />
                </a>
              </div>
              <div className="absolute inset-0 flex items-start justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-light text-sm font-semibold pt-2 px-2 text-center">
                  {movie.title}
                </h2>
              </div>
              <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs italic text-light font-light bg-red-600 px-3 py-1 rounded-full mb-2">Rate : {movie.vote_average}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-2 px-2 md:px-4 gap-2">
            <button
              type="submit"
              className="bg-psecond font-normal text-xs sm:text-sm text-light px-2 py-1 md:px-4 md:py-2 rounded-lg hover:opacity-90"
            >
              Watch
            </button>
            <button className="bg-psecond font-normal text-xs sm:text-sm text-light px-2 py-1 md:px-4 md:py-2 rounded-lg hover:opacity-90 inline-flex items-center">
              <svg
                className="fill-current h-3 w-3 md:w-4 md:h-4 mr-1 sm:mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
      );
    });
  };
  return (
    <div className="bg-dark rounded-xl px-6 pb-1 mb-10">
    <div className="font-semibold text-base text-primary py-3">
      <a href="#" className="text-sm md:text-base lg:text-xl">
        Popular
      </a>
      <hr className="border-primary mt-2" />
    </div>
    <div className="flex flex-nowrap overflow-x-auto -mx-2">
      {popularList()}
    </div>
  </div>
  );
};

export default CardPopular;
