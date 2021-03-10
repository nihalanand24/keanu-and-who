/* eslint-disable react/jsx-no-target-blank */
// import { useState } from 'react';

import MovieCard from './MovieCard';

const MoviesGallery = ({ moviesArray }) => {
  return (
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
