/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import NoPoster from './NoPoster';

const MovieCard = (props) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <div className='movieCard' onClick={onOpenModal}>
        <h3>{props.movieTitle}</h3>
        <p>({props.releaseYear})</p>
        {props.poster ? (
          <img
            src={`http://image.tmdb.org/t/p/w500${props.poster}`}
            alt={`Movie poster for ${props.movieTitle}`}
          />
        ) : (
          <NoPoster />
        )}
      </div>
      <Modal key={props.imdb} open={open} onClose={onCloseModal} center>
        <h1>{props.movieTitle}</h1>

        {props.backdrop && (
          <img
            src={`https://image.tmdb.org/t/p/w500${props.backdrop}`}
            alt={props.movieTitle}
          />
        )}
        {props.description ? (
          <p>{props.description}</p>
        ) : (
          <p>No description available for this film.</p>
        )}
        <a href={`https://imdb.com/title/${props.imdb}`} target='_blank'>
          Visit IMDb Page for <em>{props.movieTitle}</em>
        </a>
      </Modal>
    </>
  );
};

export default MovieCard;
