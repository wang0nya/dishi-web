import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../recipes/shared/recipe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(recipeForm: NgForm) {
    if (recipeForm.value.$key == null) {
      this.recipeService.insertRecipe(recipeForm.value);
    } else {
      this.recipeService.updateRecipe(recipeForm.value);
    }
    this.resetForm(recipeForm);
  }

  resetForm(recipeForm?: NgForm) {
    if (recipeForm != null) {
      recipeForm.reset();
    }
    this.recipeService.selectedRecipe = {
      $key: null,
      name: '',
      description: '',
      ingredients: '',
      method: '',
      serves: 0
    };
  }
}
