import AdditionalInfoNav from 'components/AdditionalInfoNav/AdditionalInfoNav';
import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getFullInfoById } from '../services/apiService';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';

const MovieDetailsInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movie);
  useEffect(() => {
    getFullInfoById(movieId)
      .then(setMovie)
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {movie && <MovieDetails movie={movie} />}
      <AdditionalInfoNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsInfo;
