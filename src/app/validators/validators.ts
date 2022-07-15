import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidations {

  static validationAliases(min: number, max: number): any {
    return (form: FormGroup): ValidationErrors | null => {

      const controlAliases: any = form.controls['aliases'];
        if (controlAliases){

          if (controlAliases.controls.length < min){
            return {minAliases: {min: min}}
          } else if(controlAliases.controls.length > max){
            return {maxAliases: {max: max}}
          }
      }
      return null;
    }
  }

  static validationNoSpecialChars(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

      let value: string = control.value;
      if (value){
        value = value.trimEnd();
        const valid = value.match(/^[a-zA-Z0-9_][a-zA-Z0-9_ ]*[a-zA-Z0-9_]$/)
        return valid ? null : { specialChars: true };
      }
      return null;
    }
  }

  static validationSKU(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

      let value: string = control.value;
      if (value && value.length <= 14){
        const valid = value.match(/^[0-9]{2}.[0-9]{6}.[0-9]{4}$/);
        return valid ? null : { sku: true };
      }
      return null;
    }
  }

  static onlyNumbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

      let value: string = control.value;
      if (value){
        const valid = value.match(/^[0-9]*$/);
        return valid ? null : { onlyNumbers: true };
      }
      return null;
    }
  }

}
