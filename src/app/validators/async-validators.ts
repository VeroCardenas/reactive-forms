import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { UserService } from "../services/user.service";

export class AsyncCuatomValidation {
  static userValidation(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userService
        .checkIfUsernameExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { usernameAlreadyExists: true } : null
          )
        );
    };
  }
}
