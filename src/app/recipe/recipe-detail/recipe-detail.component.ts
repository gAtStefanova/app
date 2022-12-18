import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IRecipe, IUser } from 'src/app/interfaces';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

recipeDetails: IRecipe | null=null;
currentUser:any;
recipeAuthor:any;
isCreator = false;

 recipeId=this.activatedRoute.snapshot.params['id']

constructor(private router:Router,private recipeService:RecipeService,private activatedRoute:ActivatedRoute,private authService:AuthService){
  
 }

  
 deleteRecipe(){
 console.log(this.authService.user?._id)
  const confirmation = window.confirm("Are you sure you want to delete this recipe?");
if(confirmation){

this.recipeService.deleteRecipe(this.recipeId).subscribe({
  next:(value)=>{
        
this.router.navigate(['/recipes/catalog'])
  },
  error:(err)=>console.error(err)

})
}
}

postHandler(form:NgForm):void{
if(form.invalid){return}
const userId =this.authService.user?._id
console.log(userId);

const {postText}=form.value
//this.recipeService.createPost(postText, userId, this.recipeId)
}


  ngOnInit(): void {
      this.recipeService.getRecipe(this.recipeId).subscribe({
            next: (value)=>{ 
              
                this.recipeDetails = value;
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
