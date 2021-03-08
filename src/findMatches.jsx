import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '0f71218e40b140c550833011fa9c4afb';

const findMatches = (actor1, actor2) => {
  
  const getPersonID = async (actor) => {
      const personID = await axios({
      method: 'GET',
      url: `${baseUrl}/search/person`,
      dataResponse: 'JSON',
      params: {
        api_key: apiKey,
        query: actor,
      },
    })
    .then((res) => {
      const person = res.data.results[0];
      return person.id;
    })

    console.log(personID);

  }

  getPersonID(actor1);
  getPersonID(actor2);
  
};

export default findMatches;
