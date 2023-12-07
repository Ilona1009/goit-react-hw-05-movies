import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = 'd5c8078c0eb82f90a491adf697d97e6a';

export const fetchTrends = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day?api_key=${apiKey}`);
    const trends = data.results;
    return trends;
  } catch (error) {
    console.error(
      'Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :',
      error
    );
  }
};

export const fetchMoviesBySearch = async (searchQuery, currentPage) => {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}&language=en-US`
    );
    const results = data.results;
    return results;
  } catch (error) {
    console.error(
      'Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :',
      error
    );
  }
};

export const fetchMovieById = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}?api_key=${apiKey}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error(
      'Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :',
      error
    );
  }
};

export const fetchCast = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error(
      'Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :',
      error
    );
  }
};

export const fetchReviews = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    console.error(
      'Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :',
      error
    );
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrends,
  fetchMoviesBySearch,
  fetchMovieById,
  fetchCast,
  fetchReviews,
};
