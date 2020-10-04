import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
  new Ingredient('Jaja',10),
  new Ingredient('Paradajiz',5)
  ]
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
    for(let item of this.ingredients){

      // if(item.name.toLowerCase().indexOf(ingredient.name.toLowerCase()) !== -1){ ovo je po svakom karakteru prop-a da trazi
      if(item.name.toLowerCase() === ingredient.name.toLowerCase()){
        console.log(item.name);
        item.amount += ingredient.amount;
        break;
      }else{
        this.ingredients.push(ingredient);
        break;
      }
    }

    this.ingredientAdded.next(this.ingredients.slice());
    //logic
  }
  updateIngredient(index: number, ingredient: Ingredient){

  }
  deleteIngredient(index: number){

  }
}
