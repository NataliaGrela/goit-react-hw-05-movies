import { get } from 'api/get';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useEndPoints } from 'api/endPoints';

const Reviews = () => {
  const { movieId } = useParams();
  const { reviews: reviewsPath } = useEndPoints();

  const endPointReviews = reviewsPath(movieId);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await get(endPointReviews, '');
      setReviews(response.results);
    };

    fetchReviews();
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
