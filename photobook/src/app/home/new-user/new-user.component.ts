import { ExistingUserService } from './existing-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { INewUser } from './new-user';
import { lowerCaseValidator } from './lowerCase.validator';
import { usernamePasswordEqualsValidator } from './username-password-equals.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private existingUserService: ExistingUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [lowerCaseValidator],
          [this.existingUserService.userExists()],
        ],
        password: [''],
      },
      { validators: [usernamePasswordEqualsValidator] }
    );
  }

  register() {
    if (this.newUserForm.valid) {
      const newuser = this.newUserForm.getRawValue() as INewUser;
      this.newUserService.registerNewUser(newuser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => console.log(error)
      );
    }
  }
}
