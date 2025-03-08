import {AxiosRes, axiosService} from './axios.service.ts';

import {IComplex, RecipeArr, RecipeInterface} from '../interfaces/recipe.interface.ts';

const urls = {
  random: '/random',
  complexSearch: '/complexSearch',
  information: '/information',
};

export const recipeService = {
  getAllRecipes: (number: number): AxiosRes<RecipeArr> =>
    axiosService.get(`${urls.random}?number=${number}`),
  getComplexSearch: (title: string): AxiosRes <IComplex> =>
    axiosService.get(`${urls.complexSearch}?query=${title}`),
  getFullInformation: (id: string): AxiosRes <RecipeInterface> =>
    axiosService.get(`${id}${urls.information}`),
};
