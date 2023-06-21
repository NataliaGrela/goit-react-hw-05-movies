import { useState } from 'react';
import { getMovies } from 'api/getMovies';
import { Link } from 'react-router-dom';

const Movies = ({ setCurrentImage }) => {
  const [query, setQuery] = useState();
  const [movies, setMovies] = useState();

  const endPoint = '/search/movie';

  const handleSubmit = async e => {
    e.preventDefault();
    const params = `?query=${query}&include_adult=false&language=en-US`;
    const fetchMovies = async () => {
      const newMovies = await getMovies(endPoint, params);
      setMovies(newMovies.results);
    };
    await fetchMovies();
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  return (
    <div>
      <form>
        <input onChange={handleChange}></input>
        <button
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

export default Movies;
