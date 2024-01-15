import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { SharedLayout } from './Layout/Layout';

const Home = lazy(() => import('./Pages/Home/Home'));
const FilmDetails = lazy(() => import('./Pages/FilmDetails/FilmDetails'));
const Films = lazy(() => import('./Pages/Films/Films'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div> Loading page... </div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Films />} />
          <Route path="movies/:movieId" element={<FilmDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
