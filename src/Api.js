import axios from "axios";



// const apiKey = process.env.REACT_APP_APIKEY
// const baseUrl = process.env.REACT_APP_BASEURL

export const getNowPlayingList = async () => {
    const nowPlaying = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=7e0e8b7af895a0b69fe9fbbc1f0356d2`);
    return nowPlaying.data.results;
  
};

export const getUpcomingList = async () => {
    const upcoming = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=7e0e8b7af895a0b69fe9fbbc1f0356d2`);
    return upcoming.data.results;
  
};

export const getPopularList = async () => {
    const popular = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7e0e8b7af895a0b69fe9fbbc1f0356d2`);
    return popular.data.results;
}

export const getTopRatedList = async () =>{
    const topRated = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7e0e8b7af895a0b69fe9fbbc1f0356d2`);
    return topRated.data.results
}

export const getSimilarList = async () =>{
    const similar = await axios.get(`https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=7e0e8b7af895a0b69fe9fbbc1f0356d2`);
    return similar.data.results
}