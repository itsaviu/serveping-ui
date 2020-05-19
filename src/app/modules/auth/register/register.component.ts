import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  private loading = false;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }


  navigateToLogin() {
    this.router.navigateByUrl("/auth/login");
  }

  register() {
    this.loading = true;
    const payload = this.registerForm.value;
    payload['roles'] = ['ROLE_ADMIN'];
    this.authService.register(this.registerForm.value).subscribe((resp) => {
        this.navigateToLogin();
        this.loading = false;
    }, (error) => {
        this.loading = false;
        console.log("Error Occured");
    });
  }

}
