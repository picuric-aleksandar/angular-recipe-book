import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName',{static: true}) name: ElementRef;
  @ViewChild('ingredientAmount',{static: true}) amount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  onAddIngredient(){
    //logic
  }

  onUpdateIngredient(){}

  onDeleteIngredient(){}
}
