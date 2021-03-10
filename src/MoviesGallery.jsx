/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const MoviesGallery = ({ moviesArray }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='moviesGallery'>
      {moviesArray.map((movie) => {
        return (
            <div key={movie.id} className='movieCard' onClick={toggleModal}>
            <Modal
              key={movie.imdb}
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel={movie.title}>
              <h1>{movie.title}</h1>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backgroundImage}`} alt={movie.title}/>
                </div>
                <p>{movie.description}</p>
                <a href={`https://imdb.com/title/${movie.imdb}`} target='_blank' >Visit IMDb Page</a>
              <button onClick={toggleModal}>X</button>
            </Modal>
              <h3>{movie.title}</h3>
              <p>({movie.year})</p>
              <img
                src={`http://image.tmdb.org/t/p/w500${movie.poster}`}
                alt={`Movie poster for ${movie.title}`}
              />
            </div>
        );
      })}
    </div>
  );
};

export default MoviesGallery;
