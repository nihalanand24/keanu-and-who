/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import MovieCard from './MovieCard';

const MoviesGallery = ({ moviesArray }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    onOpenModal();
  }, [moviesArray]);

  return moviesArray.error ? (
    <Modal open={open} onClose={onCloseModal}>
      <div className='errorCard'>
        <h3>{moviesArray.missingActor} is not found.</h3>
        <p>Please check the spelling and try again.</p>
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
