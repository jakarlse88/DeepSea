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
    identity: [null, null],
    echoes: [null, null]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router) {
  }

  formIsValid(): boolean {
    if (this.addressForm.get('identity').value === true
      && this.addressForm.get('echoes').value === true) {
      return true;
    }

    return false;
  }

  onSubmit(): void {
    this.router.navigate(['success']);
  }
}
