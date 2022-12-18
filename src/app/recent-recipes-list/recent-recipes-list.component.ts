import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IRecipe } from 'src/app/interfaces';

@Component({
  selector: 'app-recent-recipes-list',
  templateUrl: './recent-recipes-list.component.html',
  styleUrls: ['./recent-recipes-list.component.css']
})
export class RecentRecipesListComponent implements OnInit {

  lastRecipes: IRecipe[] | null=null ;

  constructor(private apiService:ApiService){}


  ngOnInit(): void {
    this.apiService.loadRecipes().subscribe({
      next: (value)=> {
        console.log();
        
      this.lastRecipes=value.splice(-3) as any;
              
         },

         error:(err)=>console.error(err)
        })  
    }
      


  
}
