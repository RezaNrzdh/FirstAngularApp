import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredientList = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddHandler = (nameInput: HTMLInputElement, amountInput: any) => {
    this.newIngredientList.emit(new Ingredient(nameInput.value, amountInput.value));
  }

}
