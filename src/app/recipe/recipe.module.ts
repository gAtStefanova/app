import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditFormComponent } from './edit-form/edit-form.component';



@NgModule({
  declarations: [RecipesListComponent, NewRecipeComponent, RecipeDetailComponent,EditFormComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports:[RecipesListComponent,NewRecipeComponent,RecipeDetailComponent,EditFormComponent]
})
export class RecipeModule { }
