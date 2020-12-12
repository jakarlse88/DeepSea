import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  addressForm = this.fb.group({
    identity: [Validators.required, null]
  });

  formValid: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router) {
    this.formValid = false;
    console.log(this.formValid);
  }

  onChange(): void {
    console.log(this.addressForm.get('identity'));
    this.formValid = this.addressForm.get('identity').value;

    console.log(this.formValid);
  }

  onSubmit(): void {
    if (this.formValid) {
      this.router.navigate(['success']);
    }
  }
}
