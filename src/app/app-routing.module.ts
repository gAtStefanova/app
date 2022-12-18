import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:MainComponent
  },

  {
    path:'not-found',
    component:PageNotFoundComponent
  },
  {
    path:'error',
component:ErrorComponent
  },
  {
    path:'auth',
loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
},
{
  path:'recipes',
loadChildren:()=>import('./recipe/recipe.module').then(m=>m.RecipeModule)
},
  {
    path:'**',
    redirectTo:'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
