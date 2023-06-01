import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  public formRegister: FormGroup = this.formBuilder.group({
    'nombres': [,[Validators.required, Validators.minLength(5)]],
    'correo': [,[Validators.required, Validators.email]],
    'clave': [,[Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    'terminos': [true, Validators.requiredTrue]
  });

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService
    ) {

  }

  public hasValidControl(controlName: string){
    return this.formRegister.controls[controlName].errors && this.formRegister.controls[controlName].touched;
  }

  public registerUser(){

    this.authService.resgisterUser(this.formRegister.value)
  }
}

