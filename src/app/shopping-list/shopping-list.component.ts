// import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: {name: string, amount: number}[] = [
    new Ingredient('Jaja',10),
    new Ingredient('Paradajiz',5)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
