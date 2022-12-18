import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showEditMode=false;
  formSubmited=false

get user(){
  const {username,email}=this.authService.user!;
  return {
    username,
    email
  };
}

  form=this.fb.group({
    username:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,appEmailValidator(['bg','com'])]],
  })

  constructor(private fb:FormBuilder, private authService:AuthService,private router:Router){ 
        
    this.form.setValue(this.user)
   }

  toggleEditMode():void{
    this.showEditMode=!this.showEditMode;
    if(this.showEditMode){
      this.formSubmited=false;
    }
  }
  redirect():void{
    this.router.navigate(['/'])
  }

saveProfile():void{
  this.formSubmited=true;
  if(this.form.invalid){return}

  const {username,email}=this.form.value
//this.authService.user={username,email}as any;

this.authService.setProfile(username!,email!).subscribe(
  user=>{
    this.router.navigate(['/auth/profile'])
  }
)
  this.toggleEditMode();
  
}

}
