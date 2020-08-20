import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [RegistroComponent, SignupComponent],
  imports: [
    CommonModule
  ]
})
export class RegistroModule { }
