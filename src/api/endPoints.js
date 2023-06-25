export const useEndPoints = () => {
  const endPointCastCredits = movieId => {
    const endPointCredits = `/movie/${movieId}/credits`;
    return endPointCredits;
  }; //cast

  const endPointHomeTrending = () => {
    const endPointTrending = '/trending/all/';
    return endPointTrending;
  }; //home

  const getParams = () => {
    const params = '/day?language=en-US';
    return params; //home
  };

  const endPointMovieDetails = movieId => {
    const endPoint = `/movie/${movieId}`;
    return endPoint;
  }; //moviedetails

  const endPointMovieSearch = () => {
    const endPoint = '/search/movie';
    return endPoint;
  }; //movie

  const getSearchParams = query => {
    const params = `?query=${query}&include_adult=false&language=en-US`;
    return params; //movie
  };

  const endPointReviews = movieId => {
    const endPoint = `/movie/${movieId}/reviews`;
    return endPoint;
  }; //reviews


const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';
const baseUrl = 'goit-react-hw-05-movies';

  return {
    credits: endPointCastCredits,
    trending: endPointHomeTrending,
    params: getParams,
    movieDetails: endPointMovieDetails,
    search: endPointMovieSearch,
    searchParams: getSearchParams,
    reviews: endPointReviews,
    baseUrlImg,
    baseUrl
  };
};


