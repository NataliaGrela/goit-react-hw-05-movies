import { Route, Routes } from 'react-router-dom';
import React, { useState, Suspense } from 'react';
import { useEndPoints } from 'api/endPoints';

const Home = React.lazy(() => import('components/Home/Home'));
const Movies = React.lazy(() => import('components/Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));
const Layout = React.lazy(() => import('./Layout/Layout'));

export const App = () => {
  const {baseUrl} = useEndPoints()
  const [currentImage, setCurrentImage] = useState();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              path={`${baseUrl}/`}
              element={<Home setCurrentImage={setCurrentImage} />}
            ></Route>
            <Route path={`${baseUrl}/movies`}>
              <Route
                index
                element={<Movies setCurrentImage={setCurrentImage} />}
              />
              <Route
                element={<MovieDetails image={currentImage}></MovieDetails>}
                path={`:movieId`}
              >
                <Route path={`cast`} element={<Cast />} />
                <Route path={`reviews`} element={<Reviews />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
