import React, { useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getSearchMovie } from "../Api.js";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleSearch = async (q) => {
    if (q.length > 3) {
      const query = await getSearchMovie(q);
      console.log({ query: query });
    }
  };

  return (
    <nav className="w-full bg-dark shadow">
      <div className="px-4">
        <div className="justify-between mx-auto lg:items-center lg:flex lg:px-2 ">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              <Link to="/">
                <h2 className="flex text-xl font-bold md:text-3xl lg:text-4xl text-primary ">
                  <RiMovie2Fill className=" mt-1 mr-1" />
                  BIMovies
                </h2>
              </Link>
              <div className="lg:hidden">
                <button
                  className="p-2 text-primary rounded-md outline-none focus:border-primary focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 xl:space-x-10 lg:space-y-0">
                <li className="text-light hover:text-primary flex justify-center">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-light hover:text-primary flex justify-center">
                  <Link to="/nowplaying">Now Playing</Link>
                </li>
                <li className="text-light hover:text-primary flex justify-center">
                  <Link to="/upcoming">Upcoming</Link>
                </li>
                <li className="text-light hover:text-primary flex justify-center">
                  <Link to="/popular">Popular</Link>
                </li>
                <li className="text-light hover:text-primary flex justify-center">
                  <Link to="/toprated">Top Rated</Link>
                </li>
                <label htmlFor="search">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search movie.."
                    className="bg-light w-full text-center lg:text-left font-normal text-base my-6 px-2 py-1 rounded-md shadow-md text-second focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    onChange={({ target }) => handleSearch(target.value)}
                  />
                </label>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;