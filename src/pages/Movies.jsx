import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsBySearch } from '../services/apiService';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [dataFilms, setDataFilms] = useState([]);

  useEffect(() => {
    const query = searchParams.get('q');

    getFilmsBySearch(query)
      .then(res => setDataFilms(res.results))
      .catch(err => console.log(err));
  }, [dataFilms.length, searchParams]);

  return (
    <>
      <SearchBar />
      {dataFilms && <MoviesList films={dataFilms} />}
    </>
  );
};

export default Movies;
