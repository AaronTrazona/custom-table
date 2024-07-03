import axios from "axios";

export const getMovies = async() => {
  const response = await axios.get('https://api.sampleapis.com/movies/classic');

  return response.data
}