import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-text',
  templateUrl: './validation-text.component.html',
  styleUrls: ['./validation-text.component.css']
})
export class ValidationTextComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});
  @Input() controlName: string = 'field';
  @Input() whenShow:  'dirty' | 'touched' |'pristine' | 'untouched'= 'pristine';
  @Input() showDetails: boolean = false;

  constructor() { }


  ngOnInit(): void {

  }

  get errors(){
    if (this.controlName){
      return this.form.controls[this.controlName]?.errors
    } else {
      return this.form.errors
    }
  }

  get statusModification(){
    if (this.controlName){
      return this.form.controls?.[this.controlName]?.touched
    } else {
      return this.form.dirty
    }
  }

  canShow (){
    if (this.controlName){
      return this.form.controls?.[this.controlName]?.[this.whenShow]
    } else {
      return this.form[this.whenShow]
    }

  }

  get touched (){
    if (this.controlName){
      return this.form.controls?.[this.controlName]?.touched
    } else {
      return this.form.touched
    }

  }

  get dirty (){
    if (this.controlName){
      return this.form.controls?.[this.controlName]?.dirty
    } else {
      return this.form.dirty
    }

  }
  get pristine (){
    if (this.controlName){
      return this.form.controls?.[this.controlName]?.pristine
    } else {
      return this.form.pristine
    }

  }
}
