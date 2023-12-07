import { Suspense, lazy } from 'react';
import { LoaderSpinner } from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';
import HomePage from 'Pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const MoviesPage = lazy(() => import('../../Pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../Pages/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export default function App() {
  return (
    <>
      <AppBar />
      <Container>
        <main>
          <Suspense fallback={<LoaderSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
      </Container>
    </>
  );
}
