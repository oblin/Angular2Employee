// home.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers: [FormPoster]
})
export class HomeComponent {
  // languages = ['Select a Language...', 'English', 'Spanish', 'Other'];
  private model = new Employee('Darla', 'Smith', true, '1099', null);
  private hasPrimaryLanguageError = false;

  private languages: Observable<any[]>;
  constructor(private formPoster: FormPoster) {
    this.languages = this.formPoster.getLanguages(function(err: any) {
      console.error('get result error: ', err);
    });
  }

  firtNameToUpperCase(value: string) {
    if (value.length > 0)
      this.model.FirstName = value.charAt(0).toUpperCase() + value.slice(1);
    else
      this.model.FirstName = value;
  }

  submitForm(form: NgForm) {
    // validate form
    if (!this.validatePrimaryLanguage(this.model.primaryLanguage)) {
      console.log('fall into posting');
      this.formPoster.postEmployeeForm(this.model)
        .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
        );
    }
  }

  private validatePrimaryLanguage(value: string) {
    if (value === '')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;

    return this.hasPrimaryLanguageError;
  }
}
