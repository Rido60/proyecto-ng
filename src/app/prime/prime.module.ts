import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
  ]
})
export class PrimeModule { }
