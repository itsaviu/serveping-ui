import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionManagerService } from 'src/app/core/helper/session-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private loading = false;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private sessionManager: SessionManagerService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.min(8)]]
    }); 
  }
  
  navigateToRegister() {
    this.router.navigateByUrl("/auth/register");
  }

  login() {
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe((resp) => {
      this.sessionManager.store(resp);
      this.router.navigateByUrl("/page")
      this.loading = true;
    }, (error) => {
      this.loading = true;
      console.log("error");
    });
  }
}
