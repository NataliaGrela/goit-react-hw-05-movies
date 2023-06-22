import { getMovies } from 'api/getMovies';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const endPointReviews = `/movie/${movieId}/reviews`;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies(endPointReviews, '');
      setReviews(response.results);
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return reviews.length > 0 ? (
    <div>
      <ul>
        {reviews.map(item => {
          const { author, content } = item;
          return (
            <li className="review-list">
              <h4 className="review-author">{author}</h4>
              <p className="review-content">{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>
      <p>We don't have any reviews for this movie.</p>
    </div>
  );
};

export default Reviews;
