export class Recipe {
  //konstruktor je built-in function koju svaka klasa
  // ima i koja nam omogucava da instanciramo klasu preko new
  // new RecipeModel(arg1,arg2,arg3...)
  constructor(
    public name: string,
    public recipeImage: string,
    public recipeDescription: string,
    public recipeIngredients: string[]
  ){}
}
