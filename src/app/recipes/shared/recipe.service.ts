import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  recipeList: AngularFireList<any>;
  selectedRecipe: Recipe = new Recipe();
  constructor(public firebase: AngularFireDatabase ) {
    this.recipeList = firebase.list('/recipes');
  }

  getData() {
    this.recipeList = this.firebase.list('recipes');
    return this.recipeList;
  }

  insertRecipe(recipe: Recipe) {
    this.recipeList.push({
      name: recipe.name,
      description: recipe.description,
      ingredients: recipe.ingredients,
      method: recipe.method,
      serves: recipe.serves
    });
  }

  updateRecipe(recipe: Recipe) {
    this.recipeList.update(recipe.$key,
      {
        name: recipe.name,
        description: recipe.description,
        ingredients: recipe.ingredients,
        method: recipe.method,
        serves: recipe.serves
      });
  }

  deleteRecipe($key: string) {
    this.recipeList.remove($key);
  }
}
