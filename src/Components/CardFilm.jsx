import React from "react";

const CardFilm = () => {
  return (
    <div className="pt-8 pb-32 bg-second">
      <div className="px-4">
        <div className="bg-dark rounded-xl px-6 pb-1">
          <div className="font-semibold text-base text-primary py-2">
            <h2 className="text-sm md:text-base lg:text-xl">Now Playing</h2>
            <hr className="border-primary mt-2" />
          </div>
          <div className="flex flex-wrap mt-4 -mx-2 ">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-2 mb-6">
              <div className="bg-inherit shadow-md shadow-light rounded-lg overflow-hidden">
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022.jpg"
                  alt=""
                  className="w-full object-cover"
                />
                <div className="flex justify-center py-2 gap-2">
                  <button
                    type="submit"
                    className="bg-psecond font-normal text-xs sm:text-sm text-light px-4 py-2 rounded-lg hover:opacity-90"
                  >
                    Watch
                  </button>
                  <button className="bg-psecond font-normal text-xs sm:text-sm text-light px-4 py-2 rounded-lg hover:opacity-90 inline-flex items-center">
                    <svg
                      className="fill-current w-4 h-4 mr-1 sm:mr-2"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
