import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should check first name is valid', () => {

    let firstName = component.userCreationForm.controls['firstname'];
    expect(firstName.errors['required']).toBeTruthy();
    firstName.setValue('firstname');
    expect(firstName.errors).toBeNull();
    expect(firstName.valid).toBeTruthy();
  });

  it('Should check last name is valid', () => {

    let lastName = component.userCreationForm.controls['lastname'];
    expect(lastName.errors['required']).toBeTruthy();
    lastName.setValue('lastname');
    expect(lastName.errors).toBeNull();
    expect(lastName.valid).toBeTruthy();
  });
  it('Should check  email is invalid', () => {

    let emailid = component.userCreationForm.controls['email'];
    expect(emailid.valid).toBeFalsy();
    expect(emailid.pristine).toBeTruthy();
    expect(emailid.errors['required']).toBeTruthy();
    emailid.setValue('abcd');
    expect(emailid.errors['email']).toBeTruthy();
  });
  it('Should check  email is valid', () => {

    let emailid = component.userCreationForm.controls['email'];
    emailid.setValue('123@gmail.com');
    expect(emailid.errors).toBeNull();
  });
  it('Should check user password is valid', () => {

    let pass = component.userCreationForm.controls['password'];
    expect(pass.errors['required']).toBeTruthy();
    pass.setValue('12345678');
    expect(pass.errors).toBeNull();
    expect(pass.valid).toBeTruthy();
  });

  it('Form check is valid or not if no values entered', () => {

    expect(component.userCreationForm.valid).toBeFalsy();
  });

  it('Form check is valid or not when values entered', () => {

    component.userCreationForm.controls['firstname'].setValue('luther');
    component.userCreationForm.controls['lastname'].setValue('adams');
    component.userCreationForm.controls['email'].setValue('test@gmail.com');
    component.userCreationForm.controls['password'].setValue('123456');
    expect(component.userCreationForm.valid).toBeTruthy();
  });

  it('Form Submitted should check from is submitted', () => {
    // check form is invalid
    expect(component.userCreationForm.invalid).toBeTruthy();
    let btn = fixture.debugElement.query(By.css('button[type=submit]'));
    // Check button is disabled
    expect(btn.nativeElement.disabled).toBeTruthy();
    component.userCreationForm.controls['firstname'].setValue('luther');
    component.userCreationForm.controls['lastname'].setValue('adams');
    component.userCreationForm.controls['email'].setValue('test@gmail.com');
    component.userCreationForm.controls['password'].setValue('testpassword');
    fixture.detectChanges();
    // check button is enabled
    expect(btn.nativeElement.disabled).toBeFalsy();

    component.onUserCreation();
    fixture.detectChanges();

    let success = fixture.debugElement.query(By.css('#success-msg')).nativeElement;
    expect(success.textContent).toBe('Bubba');

 });
});