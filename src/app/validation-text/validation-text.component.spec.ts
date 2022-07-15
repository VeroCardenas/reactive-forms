import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '@pichincha/bb-commons/directives';
import { CustomErrorHandler } from 'src/app/config/error-hander/error.handler';

import { ValidationTextComponent } from './validation-text.component';

describe('ValidationTextComponent', () => {
  let component: ValidationTextComponent;
  let fixture: ComponentFixture<ValidationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
      ],
      declarations: [ValidationTextComponent],
      providers: [
        CustomErrorHandler,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
