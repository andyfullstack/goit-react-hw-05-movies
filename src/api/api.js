import axios from 'axios';

const API_KEY = '55c7963f554e93b8171f77252cd52611';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getAllMoviesList = async () => {
  try {
    const data = await axios(`/trending/all/day?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieByQuery = async query => {
  try {
    const data = await axios(
      `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllMoviesInfo = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCastInfo = async movieId => {
  try {
    const { data } = await axios(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getReviewsInfo = async movieId => {
  try {
    const data = await axios(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    throw error;
  }
};
