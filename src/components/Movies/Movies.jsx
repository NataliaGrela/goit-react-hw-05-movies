import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovies } from 'api/getMovies';
import { Link } from 'react-router-dom';
import { useEndPoints } from 'api/endPoints';

const Movies = ({ setCurrentImage }) => {
  const [query, setQuery] = useState();
  const [movies, setMovies] = useState();
  const [submit, setSubmit] = useState(false);
  const { search, searchParams } = useEndPoints();

  useEffect(() => {
    if (query) {
      const params = searchParams(query);
      const endPoint = search();

      const fetchMovies = async () => {
        const newMovies = await getMovies(endPoint, params);
        setMovies(newMovies.results);
      };
      fetchMovies();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit]);

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmit(!submit);
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  return (
    <div>
      <form>
        <input className="input" onChange={handleChange}></input>
        <button
          className="btn"
          style={!query ? { pointerEvents: 'none' } : {}}
          type="click"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
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
                  to={`${item.id}`}
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

Movies.propTypes = {
  setCurrentImage: PropTypes.func.isRequired,
};

export default Movies;
