import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[] = [
    new Ingredient('Jaja',10),
    new Ingredient('Paradajiz',5)
  ]
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
  updateIngredient(index: number, ingredient: Ingredient){

  }
  deleteIngredient(index: number){
    
  }
}
