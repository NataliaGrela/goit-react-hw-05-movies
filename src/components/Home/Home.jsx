import { getMovies } from 'api/getMovies';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ setCurrentImage }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const endPoint = '/trending/all/';
  const params = '/day?language=en-US';

  useEffect(() => {
    const fetchMovies = async () => {
      const newMovies = await getMovies(page, null, endPoint, params);
      setMovies(newMovies.results);
    };

    fetchMovies();
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

export default Home;
