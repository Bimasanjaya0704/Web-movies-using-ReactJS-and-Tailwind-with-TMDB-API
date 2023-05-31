import React from "react";
import CardNowPlaying from "./CardNowPlaying";
import CardUpcoming from "./CardUpcoming";
import CardPopular from "./CardPopular";
import CardTopRated from "./CardTopRated";

const CardMovie = () => {
  return (
    <div className="pt-8 pb-10 bg-second">
      <div className="px-4">
        <CardNowPlaying />
        <CardUpcoming />
        <CardPopular />
        <CardTopRated />
      </div>
    </div>
  );
};

export default CardMovie;
