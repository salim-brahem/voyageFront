import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-side-register',
  imports: [RouterModule,   CommonModule , MaterialModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService, private router: Router ,private fb: FormBuilder ,
     private authService:AuthService ,  private snackBar: MatSnackBar) {}

  signupForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  get username() {
    return this.signupForm.get('username')!;
  }

  get email() {
    return this.signupForm.get('email')!;
  }

  get password() {
    return this.signupForm.get('password')!;
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const registerData = this.signupForm.value as { username: string; email: string; password: string };

        this.authService.registerEntreprise(registerData).subscribe({
          next: (response) => {
            console.log('Login successful:', response);
  
            localStorage.setItem('authToken', response.token);
  
            this.snackBar.open(response.message || 'Login Successful', 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar']
            });
  
            // Rediriger si besoin (ex: this.router.navigate(['/home']);
          },
          error: (error) => {
            console.error('Login error:', error);
  
            // Afficher un toast d'erreur
            this.snackBar.open(error.error?.error || 'Login Failed', 'Close', {
              duration: 3000,
              panelClass: ['error-snackbar']
            });
          }
        });
      }
  }

  
}
