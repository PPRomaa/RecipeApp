import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {
  IComplex,
  RecipeArr,
  RecipeInterface,
} from '../../interfaces/recipe.interface.ts';
import {recipeService} from '../../api/recipe.service.ts';

interface RecipeSlice {
  recipes: RecipeInterface[];
  searchRecipes: IComplex | null;
  recipe: RecipeInterface | null;
  savedRecipes: RecipeInterface[] | [];
  savedRecipe: RecipeInterface | null;
  status: 'loading' | 'succeeded' | 'failed';
  error: string;
}

const initialState: RecipeSlice = {
  recipes: [],
  searchRecipes: null,
  recipe: null,
  savedRecipes: [],
  savedRecipe: null,
  status: 'loading',
  error: '',
};

const getAll = createAsyncThunk<RecipeInterface[], number>(
  'recipeSlice/getAll',
  async (searchNum, {rejectWithValue}) => {
    try {
      const {data}: {data: RecipeArr} = await recipeService.getAllRecipes(
        searchNum,
      );
      return data.recipes;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  },
);
const updateState = createAsyncThunk<RecipeInterface[], number>(
  'recipeSlice/updateState',
  async (searchNum, {rejectWithValue}) => {
    try {
      const {data}: {data: RecipeArr} = await recipeService.getAllRecipes(
        searchNum,
      );
      return data.recipes;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  },
);
const searchByQuery = createAsyncThunk<IComplex, string>(
  'recipeSlice/searchByQuery',
  async (title, {rejectWithValue}) => {
    try {
      const {data}: {data: IComplex} = await recipeService.getComplexSearch(
        title,
      );
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  },
);
const searchFullInfo = createAsyncThunk<RecipeInterface, string>(
  'recipeSlice/searchFullInfo',
  async (id, {rejectWithValue}) => {
    try {
      const {data} = await recipeService.getFullInformation(id);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  },
);

const recipesSlice = createSlice({
  name: 'recipesSlice',
  initialState,
  reducers: {
    addSave: (state, action: PayloadAction<RecipeInterface>) => {
      if (!state.savedRecipes.some(recipe => recipe.id === action.payload.id)) {
        state.savedRecipes = [...state.savedRecipes, action.payload];
      }
    },
    removeSave: (state, action) => {
      state.savedRecipes = state.savedRecipes.filter(
        recipe => recipe.id !== action.payload
      );
    },
    chooseRecipe: (state, action: PayloadAction<RecipeInterface>) => {
      state.savedRecipe = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAll.pending, state => {
        state.status = 'loading';
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getAll.rejected, (state, action: any) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(updateState.fulfilled, (state, action) => {
        state.recipes = [...state.recipes, ...action.payload];
        state.status = 'succeeded';
      })
      .addCase(updateState.rejected, (state, action: any) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(searchByQuery.fulfilled, (state, action) => {
        state.searchRecipes = action.payload;
      })
      .addCase(searchFullInfo.fulfilled, (state, action) => {
        state.recipe = action.payload;
      }),
});

export const {
  reducer: recipeReducer,
  actions: {addSave,chooseRecipe,removeSave},
} = recipesSlice;

export const recipeActions = {
  getAll,
  updateState,
  searchByQuery,
  searchFullInfo,
  addSave,
  chooseRecipe,
  removeSave,
};
