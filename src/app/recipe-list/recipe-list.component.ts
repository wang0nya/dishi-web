import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipes/shared/recipe.service';
import { Recipe } from '../recipes/shared/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    const x = this.recipeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.recipeList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.recipeList.push(y as Recipe);
      });
    });
  }

  onEdit(emp: Recipe) {
    this.recipeService.selectedRecipe = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.recipeService.deleteRecipe(key);
    }
  }

}
