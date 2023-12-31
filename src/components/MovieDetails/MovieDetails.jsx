import PropTypes from 'prop-types';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from 'api/get';
import { useEndPoints } from 'api/endPoints';

const MovieDetails = ({ image }) => {
  const { movieId } = useParams();
  const { movieDetails, baseUrl, baseUrlImg } = useEndPoints();

  const endPoint = movieDetails(movieId);

  const [details, setDetails] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await get(endPoint, '');
      setDetails(response);
    };

    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const releaseDate = details.release_date;
  const year = releaseDate ? new Date(releaseDate).getFullYear() : null;

  return details ? (
    <div className="movie-details">
      <Link to={`/${baseUrl}/`} className="go-back-link">
        {' '}
        {'<<Go back'}{' '}
      </Link>
      <div className="details-container">
        <img
          src={baseUrlImg + image}
          alt="movie details"
          className="movie-poster"
        />

        <div>
          <h3 className="movie-title">{details.title}</h3>
          <span className="release-year">({year})</span>
          <h4 className="section-title">Overview</h4>
          <p className="overview">{details.overview}</p>
          <h4 className="section-title">Genres</h4>
          <ul className="genres-list">
            {details.genres.map(item => (
              <li key={item.id} className="genre">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="line-after-genres"></div>
      <div className="additional-info">
        <span className="additional-info-title">Additional information</span>
        <Link to="cast" className="additional-info-link">
          Cast
        </Link>
        <Link to="reviews" className="additional-info-link">
          Reviews
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  ) : null;
};

MovieDetails.propTypes = {
  image: PropTypes.string.isRequired,
};

export default MovieDetails;
