import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() itemContent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Ghormeh sabzi Recipe', 'lorem ipsum dolor esmit', 'https://via.placeholder.com/150/5e12c6'),
    new Recipe('Title2', 'lorem ipsum dolor esmit', 'https://via.placeholder.com/150/5e12c6')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getItemContent = (content: Recipe) => {
    this.itemContent.emit(content);
  }

}
