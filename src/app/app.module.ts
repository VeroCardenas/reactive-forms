import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ValidationTextComponent } from './validation-text/validation-text.component';
import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';




@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ValidationTextComponent,
  ],
  imports: [
    BrowserModule,
    // other imports ...
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TagModule,
    OverlayPanelModule,
    CheckboxModule,
    CommonModule,
    RadioButtonModule,
    CalendarModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
