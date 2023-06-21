import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from 'api/getMovies';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';
const baseUrl = 'goit-react-hw-05-movies';

const MovieDetails = ({ image }) => {
  const { movieId } = useParams();
  const endPoint = `/movie/${movieId}`;
  const [details, setDetails] = useState();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies(endPoint, '');
      setDetails(response);

    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return details ? (
    <div>
      <Link to={`/${baseUrl}/`}> {'<< Go Back'} </Link>
      <div className="details">
        <img src={baseUrlImg + image} alt="movie details"></img>
        <div>
          <h3>{details.title}</h3>
          <span></span>
          <h4>Overview</h4>
          <p>{details.overview}</p>
          <h4>Genres</h4>
          <ul>
            {details.genres.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <span>Additional information</span>
        <Link to="cast">Cast</Link>
        <Link to="reviews"> Reviews</Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  ) : null;

};

export default MovieDetails;
