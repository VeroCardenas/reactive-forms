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


  static dateStart(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      let value: string = control.value;
      if (value){
        const day = value.split('-')[2];
        console.log(day)
        return day === '01' ? null : { dateStart: {detail: 'Debe ser el primer día del mes'} };
      }
      return null;
    }
  }

}
