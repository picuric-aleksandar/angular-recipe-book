import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredientAdded = new Subject<Ingredient[]>();
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
    return this.ingredientAdded.next(this.ingredients.slice());
    //logic
  }
  updateIngredient(index: number, ingredient: Ingredient){

  }
  deleteIngredient(index: number){

  }
}
