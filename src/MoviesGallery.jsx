const MoviesGallery = ({ moviesArray }) => {
  return (
    <div className='moviesGallery'>
      {moviesArray.map((movie) => {
        return (
            <div key={movie.imdb} className='movieCard'>
                <h3>{movie.title}</h3>
                <p>({movie.year})</p>
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster}`} alt={`Movie poster for ${movie.title}`}/>
            </div>
        )
      })}
    </div>
  );
};

export default MoviesGallery;
