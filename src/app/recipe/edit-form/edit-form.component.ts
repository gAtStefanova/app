import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IRecipe } from 'src/app/interfaces';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {




recipeData:IRecipe |null=null
recipeDetails: IRecipe | null=null;
currentUser:any;
recipeAuthor:any;
isCreator = false;

 recipeId=this.activatedRoute.snapshot.params['id'];
 user=this.authService.user?._id

constructor(private router:Router,private recipeService:RecipeService,private activatedRoute:ActivatedRoute,private authService:AuthService){
 
 }

 editHandler(form:NgForm):void{
  if(form.invalid){return;}
      
      const {title,imageUrl,description,prepTime,cookTime,ingredients}=form.value;
  
      this.recipeService.updateRecipe(this.recipeId,title,imageUrl,description,prepTime,cookTime,ingredients)
      .subscribe((value)=>{
        console.log(value);
        
  this.router.navigate([`/recipes/detail/${this.recipeId}`])
      })
    }



  ngOnInit(): void {

    this.recipeService.getRecipe(this.recipeId).subscribe({
      next: (value)=>{ 
        
          this.recipeData = value;
          
    this.currentUser=this.authService.user?._id
    this.recipeAuthor=value.userId
    if(this.currentUser==this.recipeAuthor){
    this.isCreator = true;
    }        
    },
    error:(err)=>console.error(err)
    })  
    
    }
  }


