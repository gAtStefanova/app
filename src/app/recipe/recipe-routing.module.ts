import {  RouterModule, Routes } from "@angular/router";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { NewRecipeComponent } from "./new-recipe/new-recipe.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";


const routes:Routes=[
    
    {
        path:'catalog',
        component:RecipesListComponent

    },{
        path:'new',
        component:NewRecipeComponent
    },
    {
        path:'detail/:id',
        component:RecipeDetailComponent
    },
    {
        path:'detail/edit/:id',
        component:EditFormComponent
    },

        
    
];
export const RecipeRoutingModule=RouterModule.forChild(routes);