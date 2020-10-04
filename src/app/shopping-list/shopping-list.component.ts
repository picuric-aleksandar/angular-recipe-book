import { ShoppingService } from './shopping.service';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(
    private shoppinListService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinListService.getIngredients();
    this.shoppinListService.ingredientAdded
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

}
