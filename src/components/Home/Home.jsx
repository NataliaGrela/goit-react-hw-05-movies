import PropTypes from 'prop-types';
import { get } from 'api/get';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEndPoints } from 'api/endPoints';

const Home = ({ setCurrentImage }) => {
  const [movies, setMovies] = useState([]);
  const { trending, params } = useEndPoints();
  const endPoint = trending();
  const endPointParams = params();

  useEffect(() => {
    const fetchTrending = async () => {
      const newMovies = await get(endPoint, endPointParams);
      setMovies(newMovies.results);
    };

    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movies);

  return (
    <div className="title">
      <h1>Trending today </h1>
      {movies ? (
        <ul>
          {' '}
          {movies.map(item => {
            const title = item.media_type === 'tv' ? item.name : item.title;
            return (
              <li key={item.id}>
                <Link
                  onClick={() => {
                    setCurrentImage(item.backdrop_path);
                  }}
                  className="title-el"
                  to={`movies/${item.id}`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div></div>
      )}
    </div>
  );
};

Home.propTypes = {
  setCurrentImage: PropTypes.func.isRequired,
};

export default Home;
