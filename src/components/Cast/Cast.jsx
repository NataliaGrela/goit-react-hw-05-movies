import PropTypes from 'prop-types';
import { getMovies } from 'api/getMovies';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const { movieId } = useParams();
  const endPointCredits = `/movie/${movieId}/credits`;
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies(endPointCredits, '');
      setCast(response.cast);
      console.log(response);
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return cast.length > 0 ? (
    <div>
      <ul>
        {cast.map(item => {
          const { profile_path, name, character } = item;
          return (
            <li className="cast-item">
              <div className="cast-wrapper">
                <img
                  className="cast-img"
                  src={baseUrlImg + profile_path}
                  alt="cast"
                />
              </div>
              <div className="cast-info">
                <span className="cast-name">{name}</span>
                <span className="cast-character">Character: {character}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>
      <p>We don't have any cast for this movie.</p>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
