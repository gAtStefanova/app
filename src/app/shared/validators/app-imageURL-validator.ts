import { ValidatorFn } from "@angular/forms";

export function appImageUrlValidator():ValidatorFn{
    
    const re=new RegExp(`^https?:\/\/.+$`)
    return(control)=>{
        

        return (control.value==="" || re.test(control.value)) ? null : {appImageUrlValidator :true}

    }
}



