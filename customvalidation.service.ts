import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {
 


  //names
  // nameValidatorss(control: any): { [key: string]: boolean } {
  //   const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/\/,/0-9]/;
  //   // const spaceexp: RegExp =/[/\s/g, '']/

  //   if (control.value && nameRegexp.test(control.value)) {
  //     return { invalidName: true };
  //   }
  // }


  nameValidatorss(control: any): { [key: string]: boolean } {
     // const nameRegexp: RegExp= /^\S.*[^.\s]$/
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/\/,/0-9]/;
    // const spaceexp: RegExp =/[/\s/g, '']/
    const spaceexp: RegExp = /^\s.*[^.\s]$/

    if (control.value && nameRegexp.test(control.value)) {
      return { invalidName: true };
    }

    if(control.value && spaceexp.test(control.value)) {
      return { invalidName: true };
    }
    return { invalidName: false };
  }

  //number
  // nameValidator(control: any): { [key: string]: boolean } {
  //   const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/\s/g,''/a-zA-Z]/;
  //   // const spaceexp: RegExp =/[/\s/g, '']/

  //   if (control.value && nameRegexp.test(control.value)) {
  //     return { invalidName: true };
  //   }
  // }

  nameValidator(control: any): { [key: string]: boolean } {
     const nameRegexp: RegExp = /\\A[0-9]{10}\\z/;
      //  const nameRegexp: RegExp= /^\+?[1-9][0-9]{7,14}$/;
    // const spaceexp: RegExp =/[/\s/g, '']/

    if (control.value && nameRegexp.test(control.value)) {
      return { invalidName: true };
    }
    return { invalidName: false };
  }
  

  //  patternValidator(control: AbstractControl):  { [key: string]: any} | null {
  //   const nameRegexp: RegExp =/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/; 
  //     if (control.value && nameRegexp.test(control.value))
  //     {
  //       return { invalidName:true};
  //     }
  // }
       patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null  as any;
      }
  
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
  
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null  as any : error;
    };
  }

  //  MatchValidators(control: AbstractControl): {[key: string]: any} | null  {
  //   const password: string = Registerform.controls['Password'].value; 
  //   const confirmPassword: string = Registerform.controls['ConfirmPassword'].value; 

  //    // if the confirmPassword length is < 6, set the minLength error.
  //    if (confirmPassword.length < 6) {
  //     control.get('ConfirmPassword').setErrors({ minLength: true });
  //     return {minLength: true};
  //   }
  //    else {
  //     // compare the passwords and see if they match.
  //     if (password !== confirmPassword) {
  //       control.get("confirmPassword").setErrors({ mismatch: true });
  //       return { mismatch: true };
  //     }
  //   }
  // }
   MatchValidators(Password: string, ConfirmPassword: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const password = controls.get('Password') as AbstractControl;
      const confirmPassword = controls.get('ConfirmPassword') as AbstractControl;

      if (confirmPassword.errors && !confirmPassword.errors.matching) {
        return null;
      }

      if (password.value !== confirmPassword.value) {
        controls.get('ConfirmPassword')!.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }  
}


