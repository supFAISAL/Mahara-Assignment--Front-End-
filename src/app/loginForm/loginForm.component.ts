import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',Validators.required)
  })
  constructor(private _snackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
  }

  submitForm(){
    if(this.loginForm.value.email !== 'dummytesting@gmail.com' && this.loginForm.value.password!=='Helloworld'){
      this._snackBar.open("Wrong Email Or Password,try again", 'Close',{duration:1000});

    }else{
      this.router.navigateByUrl('/home');

    }
  }
}
