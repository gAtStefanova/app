import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/interfaces';
import { ApiService } from '../../api.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 
  recipeList: IRecipe[] | null=null ;

  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe({
      
      next: (value)=> {
        
      this.recipeList=value as any;
              
         },

         error:(err)=>console.error(err)
        })  
    }
      
     
  }


