/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import NoPoster from './NoPoster';

const MovieCard = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {props.releaseYear && (
        <button className='movieCard' onClick={() => setOpen(true)}>
          <h3>{props.movieTitle}</h3>
          <p>({props.releaseYear})</p>
          {props.poster ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${props.poster}`}
              alt={`Movie poster for ${props.movieTitle}`}
            />
          ) : (
            <NoPoster />
          )}
        </button>
      )}
      <Modal
        key={props.imdb}
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'movieModal',
        }}
        aria-labelledby='modalTitle'
        aria-describedby='modalDescription'>
        <div className='modalContent'>
          {props.backdrop && (
            <img
              src={`https://image.tmdb.org/t/p/original${props.backdrop}`}
              alt={props.movieTitle}
            />
          )}
          <h2 id='modalTitle'>{props.movieTitle}</h2>
          {props.description ? (
            <p id='modalDescription'>{props.description}</p>
          ) : (
            <p>No description available for this film.</p>
          )}

          {props.imdb && (
            <a href={`https://imdb.com/title/${props.imdb}`} target='_blank'>
              Visit IMDb Page for <em>{props.movieTitle}</em>
            </a>
          )}
        </div>
      </Modal>
    </>
  );
};

export default MovieCard;
