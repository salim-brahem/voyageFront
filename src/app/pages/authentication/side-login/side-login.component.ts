
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';






@Component({
  selector: 'app-side-login',
  standalone: true,

  imports: [RouterModule,   CommonModule , MaterialModule, FormsModule, ReactiveFormsModule , MatSnackBarModule,
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder ,private authService : AuthService ,  private snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful:', response);

          localStorage.setItem('authToken', response.token);
          console.log('Token enregistré:', localStorage.getItem('authToken'));


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
