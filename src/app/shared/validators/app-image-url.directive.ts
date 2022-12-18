import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appImageUrlValidator } from './app-imageURL-validator';

@Directive({
  selector: '[appImageUrl]',
  providers: [
    {
      provide:NG_VALIDATORS,
      useExisting:AppImageUrlDirective,
      multi:true
    }
  ]

})
export class AppImageUrlDirective implements OnChanges, Validator {

@Input() appImageUrl: string[] = [];

validator:ValidatorFn=()=>null


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const appImageUrlChange=changes['appImageUrl']
    
    if(appImageUrlChange){
      this.validator=appImageUrlValidator();
          }

  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control)
  }
  
  

}



