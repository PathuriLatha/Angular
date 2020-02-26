import { ValidatorFn, ValidationErrors, FormGroup } from "@angular/forms";

/*
import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {

  const password = control.get('pwd');
  const confirmPassword = control.get('cPwd');
  console.lg(password +" "+confirmPassword);
  if(password.pristine || confirmPassword.pristine){
    return null;
  }

  return ( password && confirmPassword && (password.value !== confirmPassword.value) ) ? {'misMatch': true} : null ;

}
 */
export const PasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('pwd');
  const confirmPassword = control.get('cPwd');
  //console.log(password +" "+confirmPassword);

  return password && confirmPassword && password.value !== confirmPassword ? {'misMatch': true} : null ;
};
