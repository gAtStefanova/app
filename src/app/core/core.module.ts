import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from '../auth/auth.module';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
    ErrorComponent
    
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    CommonModule,
    

  ],exports:[
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
