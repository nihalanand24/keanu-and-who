import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '0f71218e40b140c550833011fa9c4afb';

const getCommonMovies = async (actor1, actor2) => {
  const getActorIDs = async (actor1Name, actor2Name) => {
    const getAxiosConfig = (actor) => {
      return {
        method: 'GET',
        url: `${baseUrl}/search/person`,
        dataResponse: 'JSON',
        params: {
          api_key: apiKey,
          query: actor,
        },
      };
    };

    const actor1Config = getAxiosConfig(actor1Name);

    const actor2Config = getAxiosConfig(actor2Name);

    const actor1ID = await axios(actor1Config)
      .then((res) => res.data.results[0])
      .then((person) => person.id)
      .catch(() =>
        alert(
          'No actor named ' +
            actor1Name +
            ' was found. Please check the spelling and try again.'
        )
      );

    const actor2ID = await axios(actor2Config)
      .then((res) => res.data.results[0])
      .then((person) => person.id)
      .catch(() =>
        alert(
          'Cannot find an actor named ' +
            actor2Name +
            '. Please check the spelling and try again.'
        )
      );

    getCredits(actor1ID, actor2ID);
  };

  const getCredits = async (actor1ID, actor2ID) => {
    const getAxiosConfig = (actorID) => {
      return {
        method: 'GET',
        url: `${baseUrl}/person/${actorID}/movie_credits`,
        dataResponse: 'JSON',
        params: {
          api_key: apiKey,
        },
      };
    };

    const actor1Config = getAxiosConfig(actor1ID);

    const actor2Config = getAxiosConfig(actor2ID);

    const actor1Credits = await axios(actor1Config).then((res) => {
      const credits = res.data.cast;
      const fictionCredits = [];

      for (let movie of credits) {
        if (!movie.genre_ids.includes(99)) {
          fictionCredits.push(movie.id);
        }
      }
      return fictionCredits;
    });

    const actor2Credits = await axios(actor2Config).then((res) => {
      const credits = res.data.cast;
      const fictionCredits = [];

      for (let movie of credits) {
        if (!movie.genre_ids.includes(99)) {
          fictionCredits.push(movie.id);
        }
      }
      return fictionCredits;
    });

    findMatch(actor1Credits, actor2Credits);
  };

  const findMatch = async (actor1Credits, actor2Credits) => {
    actor1Credits.forEach((movieID) => {
      if (actor2Credits.includes(movieID)) {
        getMovieObj(movieID);
      }
    });
  };

  const commonMovieArray = [];

  const getMovieObj = (movieID) => {
    axios({
      method: 'GET',
      url: `${baseUrl}/movie/${movieID}`,
      dataResponse: 'JSON',
      params: {
        api_key: apiKey,
      },
    }).then((res) => {
      const movie = res.data;
      // console.log(movie);
      commonMovieArray.push({
        year: movie.release_date.slice(0, 4),
        title: movie.title,
        poster: movie.poster_path,
        backgroundImage: movie.backdrop_path,
        imdb: movie.imdb_id,
        overview: movie.overview,
      });
    });
  };

  getActorIDs(actor1, actor2);
  return commonMovieArray;
};

export default getCommonMovies;
