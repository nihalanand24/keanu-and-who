/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieCard from './MovieCard';

const MoviesGallery = ({ moviesArray, actor1, actor2 }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [moviesArray]);

  return !moviesArray.length ? (
    <div className='moviesGallery'>
      <p>Enter the names of any two actors to get started</p>
    </div>
  ) : moviesArray[0] === 'ERROR' ? (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div
        className='errorCard'
        aria-labelledby='errorModalTitle'
        aria-describedby='errorModalDescription'>
        <h3 id='errorModalTitle'>We couldn't find {moviesArray[1]}</h3>
        <p id='errorModalDescription'>
          Please check the spelling and try again.
        </p>
      </div>
    </Modal>
  ) : moviesArray[0] === 'NO RESULT' ? (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className='errorCard'>
        <h3>Hmm... No movies found</h3>
        <p>
          It seems {actor1} and {actor2} have never acted in a movie together.
        </p>
      </div>
    </Modal>
  ) : (
    <div className='moviesGallery'>
      {moviesArray.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movieTitle={movie.title}
            releaseYear={movie.year}
            poster={movie.poster}
            imdb={movie.imdb}
            backdrop={movie.backdrop}
            description={movie.overview}
          />
        );
      })}
    </div>
  );
};

export default MoviesGallery;
