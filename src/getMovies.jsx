const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '0f71218e40b140c550833011fa9c4afb';

export default function getMovies(actor1Name, actor2Name, setDataFromApi) {
  const getActorIDs = async (actor1, actor2) => {
    const url = new URL(`${baseUrl}/search/person`);
    url.search = new URLSearchParams({
      api_key: apiKey,
      query: actor1,
    });

    let actor1ID;
    let actor2ID;
    let res;
    let jsonRes;

    try {
      res = await fetch(url);
      jsonRes = await res.json();
      actor1ID = await jsonRes.results[0].id;
    } catch (e) {
      setDataFromApi(['ERROR', `${actor1}`]);
      return;
    }

    url.search = new URLSearchParams({
      api_key: apiKey,
      query: actor2,
    });

    try {
      res = await fetch(url);
      jsonRes = await res.json();
      actor2ID = await jsonRes.results[0].id;
    } catch (e) {
      setDataFromApi(['ERROR', `${actor2}`]);
      return;
    }

    getActorCredits(actor1ID, actor2ID);
  };

  const getActorCredits = async (id1, id2) => {
    const actor1Credits = await getCredits(id1);
    const actor2Credits = await getCredits(id2);

    findMatch(actor1Credits, actor2Credits);
  };

  const findMatch = async (actor1Movies, actor2Movies) => {
    const matchedIDs = actor1Movies.filter((movieID) =>
      actor2Movies.includes(movieID)
    );

    const moviesArray = await matchedIDs.map((id) => {
      const movieObject = getMovieObj(id);
      return movieObject;
    });

    Promise.all(moviesArray).then((res) => {
      !res.length ? setDataFromApi(['NO RESULT']) : setDataFromApi(res);
    });
  };

  const getMovieObj = async (movieID) => {
    const url = new URL(`${baseUrl}/movie/${movieID}`);
    url.search = new URLSearchParams({
      api_key: apiKey,
    });

    const res = await fetch(url);
    const jsonRes = await res.json();
    const movie = await jsonRes;

    return {
      title: movie.title,
      year: movie.release_date.slice(0, 4),
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      imdb: movie.imdb_id,
      overview: movie.overview,
      id: movie.id,
    };
  };

  const getCredits = async (id) => {
    const url = new URL(`${baseUrl}/person/${id}/movie_credits`);
    url.search = new URLSearchParams({
      api_key: apiKey,
    });

    const res = await fetch(url);
    const jsonRes = await res.json();
    const credits = await jsonRes.cast;

    const movieCredits = [];
    for (let movie of credits) {
      if (!movie.genre_ids.includes(99)) {
        movieCredits.push(movie.id);
      }
    }
    return movieCredits;
  };

  getActorIDs(actor1Name, actor2Name);
}
