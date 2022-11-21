import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AsyncCuatomValidation } from '../validators/async-validators';
import { CustomValidations } from '../validators/validators';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  whenShow: string = 'touched';
  categories: any[] = ['touched', 'pristine', 'dirty'];
  showDetsValidations: boolean = true;


  profileForm = new FormGroup({
    userName: new FormControl('',
      [
        Validators.required
      ],
      [
        AsyncCuatomValidation.userValidation(this.userService)
      ]),
    firstName: new FormControl('',
      [
        Validators.required
      ]),
    lastName: new FormControl('',      [
        Validators.required
      ]),
    dateStart: new FormControl('', [
      Validators.required,
      CustomValidations.dateStart()
    ]),
    address: this.fb.group({
      street: ['', [Validators.maxLength(100)]],
      city: ['', Validators.maxLength(50)],
    }),
    aliases: this.fb.array([
      this.fb.control('', [Validators.required])
    ])
  }, { validators: [CustomValidations.validationAliases(2, 4)] });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder,
    private userService: UserService,) { }

  updateProfile() {
    this.profileForm.patchValue({
      userName: 'Batman',
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onDeleteRowBillArticle(rowIndex: number): void {
    this.aliases.removeAt(rowIndex);
  }

  addAlias() {
    this.aliases.push(this.fb.control('', [Validators.required]));
    console.log(this.aliases)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
