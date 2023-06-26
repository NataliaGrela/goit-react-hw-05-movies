import PropTypes from 'prop-types';
import { get } from 'api/get';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useEndPoints } from 'api/endPoints';

const Cast = () => {
  const { movieId } = useParams();
  const { credits, baseUrlImg } = useEndPoints()

  const endPointCredits = credits(movieId)

  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      const response = await get(endPointCredits, '');
      setCast(response.cast);
    };

    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return cast.length > 0 ? (
    <div>
      <ul className="cast">
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
