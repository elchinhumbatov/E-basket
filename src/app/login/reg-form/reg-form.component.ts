import { Component, OnInit } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  regForm: FormGroup;
  faUpload = faUpload;

  constructor() { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      password2: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }
  onSubmit(): void {
    if (this.regForm.valid) {
      const formValues = this.regForm.value;
      console.log(formValues);
      this.regForm.reset();
    }
  }

}
