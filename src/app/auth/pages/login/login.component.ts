import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public formUser: FormGroup = this.formBuilder.group({
    'correo': [,[Validators.required, Validators.email]],
    'clave': [,[Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
  });

  constructor(private formBuilder: FormBuilder) {

  }

  public hasValidControl(controlName: string){
    return this.formUser.controls[controlName].errors && this.formUser.controls[controlName].touched;
  }

  public loginUser(){
    console.log('click entramos :)');
  }

}
