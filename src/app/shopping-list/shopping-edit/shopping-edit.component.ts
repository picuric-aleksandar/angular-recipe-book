import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';


import { ShoppingService } from './../shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName',{static: true}) name: ElementRef;
  @ViewChild('ingredientAmount',{static: true}) amount: ElementRef;

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
  }


  onAddIngredient(){
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(name,amount);
    this.shoppingService.addIngredient(newIngredient);
  }

  onUpdateIngredient(){}

  onDeleteIngredient(){}
}
