import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'profile';

  constructor(private primengConfig: PrimeNGConfig) { }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
