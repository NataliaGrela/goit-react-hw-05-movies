import axios from 'axios';

export const getMovies = async (page, query, endPoint, params) => {
  const API_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '98508827f05a75ce090c198b346c38ec';
  const config = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODUwODgyN2YwNWE3NWNlMDkwYzE5OGIzNDZjMzhlYyIsInN1YiI6IjY0OTA2ODcxYzNjODkxMDBjYWRiN2E2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zspl2sUoDspIgRQ-TfLZNYqaNo_q586p__yDNruaAx8',
    },
  };

  try {
    const response = await axios.get(
      API_URL + endPoint + params,
      config
    );
    const { data } = response;
    // if (data.results.length === 0) {
    //   //   alert(
    //   //     'Sorry, there are no images matching your search query. Please try again.'
    //   //   );
    // }
    return data;
  } catch (error) {
    console.log(error)
    // alert(
    //   'Sorry, there was an error. Please try again later.'
    // );
    throw new Error('Error');
  }
};
