import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user =""
  password=""

  constructor(private authService: AuthenticationService , private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.authenticate(this.user , this.password).subscribe(()=>{
      console.log("autenticado c sucesso")
      this.router.navigate(['photographs'])
    }, (error)=>{
      alert("user or pass invalid")
      console.log(error)
    })
    console.log(this.user)
    console.log(this.password)
  }

}
