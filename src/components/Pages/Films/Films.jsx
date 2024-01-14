import Loader from 'components/Loader/Loader';
import MoviesList from 'components/FilmList/FilmList';
import SearchForm from 'components/SearchForm/SearchForm';
import useFetchByQuery from 'components/helpers/useFetchByQuery';

const Films = () => {
  const { movies, error, isLoading, handleSubmit } = useFetchByQuery();
  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <h3>Try to reload the page</h3>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Films;
