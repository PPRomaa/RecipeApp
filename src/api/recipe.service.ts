import {AxiosRes, axiosService} from './axios.service.ts';

import { RecipeArr, RecipeInterface} from '../interfaces/recipe.interface.ts';

const urls = {
  random: '/random',
  complexSearch: '/complexSearch',
  information: '/information',
};

export const recipeService = {
  getAllRecipes: (number: number): AxiosRes<RecipeArr> =>
    axiosService.get(`${urls.random}?number=${number}`),
  getComplexSearch: <T>(title: string): AxiosRes<T> =>
    axiosService.get(`${urls.complexSearch}?query=${title}`),
  getByType: <T>(title: string): AxiosRes<T> =>
    axiosService.get(`${urls.complexSearch}?type=${title}`),
  getFullInformation: (id: string): AxiosRes <RecipeInterface> =>
    axiosService.get(`${id}${urls.information}`),
};
