import { NgModule } from '@angular/core';
import {MatButtonModule,MatToolbarModule,  MatButtonToggleModule,MatCardModule} from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatCardModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
