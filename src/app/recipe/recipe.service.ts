import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRecipe } from '../interfaces';


const apiURL=environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

getAllRecipes(){
return this.http.get<IRecipe[]>(`${apiURL}/recipes`);
}


getRecipe(id:string){
return this.http.get<IRecipe>(`${apiURL}/recipes/detail/${id}`);
  }

  createRecipe(title:string,imageUrl:string, description:string,prepTime:string,cookTime:string,ingredients:string){

    return this.http.post<IRecipe>(`/api/recipes/`,{title:title,imageUrl:imageUrl,description:description,prepTime:prepTime,cookTime:cookTime,ingredients:ingredients});
      }

  updateRecipe(id:string,title:string,imageUrl:string, description:string,prepTime:string,cookTime:string,
        ingredients:string):Observable<IRecipe>{
        return this.http.put<IRecipe>(`/api/recipes/${id}/edit/`,{title:title,imageUrl:imageUrl,description:description,prepTime:prepTime,cookTime:cookTime,ingredients:ingredients,},{withCredentials:true});
          }

  deleteRecipe(recipeId:string){
        return this.http.delete<IRecipe>(`${apiURL}/recipes/detail/delete/${recipeId}`);
       }
       createPost(postText:string, userId:string,recipeId:string){

        return this.http.post<IRecipe>(`/api/recipes/`,{postText:postText,userId:userId,recipeId:recipeId});
          }
  

      }
  



