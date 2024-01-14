import Loader from 'components/Loader/Loader';
import FilmList from 'components/FilmList/FilmList';
import { useFetchAllFilms } from 'components/helpers/useFetchAllFilms';

const Home = () => {
  const { movies, error, loading } = useFetchAllFilms();

  return (
    <div>
      {loading && <Loader />}
      {error && <h3>Try to reload this page</h3>}
      {movies.length !== 0 && <FilmList movies={movies} />}
    </div>
  );
};

export default Home;
