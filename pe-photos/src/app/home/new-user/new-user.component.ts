import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { INewUser } from './new-user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup

  constructor(private formBuilder: FormBuilder , private newUserService: NewUserService) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      fullName:['',[Validators.required, Validators.minLength(4)]],
      userName:[''],
      password:[''],
    })
  }

  register(){
    const newuser = this.newUserForm.getRawValue() as INewUser;
    console.log(newuser)
  }


}
