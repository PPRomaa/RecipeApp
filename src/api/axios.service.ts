import axios, {AxiosResponse} from 'axios';

export const baseURL = 'https://api.spoonacular.com/recipes/';
const API_KEY = '7b171b89547d4f3f84a13531b6fdb24d';

export type AxiosRes<T> = Promise<AxiosResponse<T>>;

export const axiosService = axios.create({
  baseURL,
  params: {
    apiKey: API_KEY,
  },
});
