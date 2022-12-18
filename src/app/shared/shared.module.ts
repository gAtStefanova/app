import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { AppImageUrlDirective } from './validators/app-image-url.directive';
import { SlicePipePipe } from './slice-pipe.pipe';



@NgModule({
  declarations: [
    AppEmailDirective,
    AppImageUrlDirective,
    SlicePipePipe
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppEmailDirective,
    AppImageUrlDirective
  ]
})
export class SharedModule { }
