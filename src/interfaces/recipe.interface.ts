interface IEquipment {
  id: string;
  image: string;
  localizedName: string;
  name: string;
}

interface ILength {
  number: string;
  unit: string;
}

interface ISteps {
  equipment: IEquipment[];
  ingredients: IEquipment[];
  length: ILength;
  number: string;
  step: string;
}

interface IAnalyzed {
  name: string;
  steps: ISteps[];
}

interface IMeasure {
  amount: number;
  unitLong: string;
  unitShort: string;
}

interface IMeasures {
  metric: IMeasure;
  us: IMeasure;
}

interface IIngredients {
  aisle: string;
  amount: string;
  consistency: string;
  id: string;
  image: string;
  measures: IMeasures;
  meta: [];
  name: string;
  original: string;
  originalName: string;
  unit: string;
}

interface IWineProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
}

interface IWinePairing {
  pairedWines: string[];
  pairingText: string;
  productMatches: IWineProduct[];
}

export interface RecipeInterface {
  id: string;
  title: string;
  image: string;
  imageType: string;
  servings: string;
  readyInMinutes: string;
  cookingMinutes: string;
  preparationMinutes: string;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  healthScore: string;
  spoonacularScore: string;
  pricePerServing: string;
  analyzedInstructions: IAnalyzed[];
  cheap: boolean;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions: string[];
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  weightWatcherSmartPoints: string;
  dishTypes: string[];
  extendedIngredients: IIngredients[];
  summary: string;
  winePairing: IWinePairing;
}
export interface RecipeArr {
  recipes: RecipeInterface[];
}
export interface ComplexResult {
  id: string;
  title: string;
  image: string;
  imageType: string;
}
export interface IComplex {
  offset: string;
  number: string;
  results: ComplexResult[];
  totalResults: string;
}
