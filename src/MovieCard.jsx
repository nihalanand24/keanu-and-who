/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import Modal from 'react-modal';
import NoPoster from './NoPoster';
Modal.setAppElement('#root');

const MovieCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    //   console.log(e);
  };

  return (
    <>
      <div className='movieCard' onClick={toggleModal}>
        <h3>{props.movieTitle}</h3>
        <p>({props.releaseYear})</p>
        {props.poster ?
            <img
          src={`http://image.tmdb.org/t/p/w500${props.poster}`}
          alt={`Movie poster for ${props.movieTitle}`}
        /> :
        <NoPoster />}
      </div>
      <Modal
        key={props.imdb}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel={props.movieTitle}>
        <h1>{props.movieTitle}</h1>
        
        {props.backdrop ? <img
          src={`https://image.tmdb.org/t/p/w500${props.backdrop}`}
          alt={props.movieTitle}
        />
    : 'No image found' }
        <p>{props.description}</p>
        <a href={`https://imdb.com/title/${props.imdb}`} target='_blank'>Visit IMDb Page</a>
        <button onClick={toggleModal}>X</button>
      </Modal>
    </>
  );
};

export default MovieCard;
