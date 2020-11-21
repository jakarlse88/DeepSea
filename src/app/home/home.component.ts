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
    identity: [null, null]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  onSubmit() {
    this.router.navigate(['success']);
  }
}
