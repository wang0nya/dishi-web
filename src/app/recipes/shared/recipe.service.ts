import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  recipeList: AngularFireList<any>;
  selectedRecipe: Recipe = new Recipe();
  constructor(private firebase: AngularFireDatabase ) { }

  getData() {
    this.recipeList = this.firebase.list('recipes');
    return this.recipeList;
  }

  insertRecipe(recipe: Recipe) {
    this.recipeList.push({
      name: recipe.name,
      position: recipe.position,
      office: recipe.office,
      salary: recipe.salary
    });
  }

  updateRecipe(recipe: Recipe) {
    this.recipeList.update(recipe.$key,
      {
        name: recipe.name,
        position: recipe.position,
        office: recipe.office,
        salary: recipe.salary
      });
  }

  deleteRecipe($key: string) {
    this.recipeList.remove($key);
  }
}
