import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar'


const MODULOS = [
  MatToolbarModule,
  MatIconModule, 
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,


]



@NgModule({
  exports:[MODULOS],
  imports: [MODULOS]
})
export class ModulosModule { }
