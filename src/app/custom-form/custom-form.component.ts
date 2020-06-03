import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  @Input() inputJson: Array<Object>;
  @Output() onUserSaved = new EventEmitter();

  userCreationForm: FormGroup;
  hide = true;

  constructor() { }

  ngOnInit(): void {

    const formGroupOptions = {};

    this.inputJson.forEach(json => { formGroupOptions[json['name']] = this.getFormControl(json['validation']) });

    this.userCreationForm = new FormGroup(formGroupOptions);

  }

  private getValidation(names) {
    if(!names || !(names instanceof Array) || names.length === 0){
      return [];
    } else {
      names = names[0].split(',');
    }
    return names.map( validation => {
      switch(validation) {
        case 'required' : return Validators.required;
        case 'email': return Validators.email;
        }    
      }
    );
  }

  private getFormControl(validations) {
    return new FormControl(null, this.getValidation(validations))
  }

  public onSubmit() {

    if (this.userCreationForm.valid){
      this.onUserSaved.emit(this.userCreationForm.value);
    }

  }

  private isControlAvailable(name) {
    return this.userCreationForm.contains(name);
  }

}
