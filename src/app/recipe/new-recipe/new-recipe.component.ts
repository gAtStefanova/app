import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {


  constructor(private recipeService:RecipeService,
    private router:Router){ }

  createHandler(form:NgForm):void{
if(form.invalid){return;}
    
    const {title,imageUrl,description,prepTime,cookTime,ingredients}=form.value;

    this.recipeService.createRecipe(title,imageUrl,description,prepTime,cookTime,ingredients)
    .subscribe(()=>{
this.router.navigate(['/'])
    })
  }
}


