import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName',{static: true}) name: ElementRef;
  @ViewChild('ingredientAmount',{static: true}) amount: ElementRef;

  constructor(
    private shoppingService: ShoppinService
  ) { }

  ngOnInit(): void {
  }


  onAddIngredient(){
    const name = this.name.nativeElement.value;
    const amount = this.name.nativeElement.value;
    this.shoppingService.addIngredient({name: name, amount: amount})
  }

  onUpdateIngredient(){}

  onDeleteIngredient(){}
}
