import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  private inputJson = {
    "login": [
      {
        "type": "email",
        "name": "emailid",
        "validation": [
          "required,email"
        ]
      },
      {
        "type": "password",
        "name": "password",
        "validation": [
          "required"
        ]
      }
    ],
    "distributordetails": [
      {
        "type": "email",
        "name": "emailid",
        "validation": [
          "required,email"
        ]
      },
      {
        "type": "password",
        "name": "password",
        "validation": [
          "required"
        ]
      },
      {
        "type": "text",
        "name": "firstname",
        "validation": [
          "required"
        ]
      },
      {
        "type": "text",
        "name": "lastname",
        "validation": [
          "required"
        ]
      }
    ],
    "vendordetails": [
      {
        "type": "email",
        "name": "emailid",
        "validation": [
          "required,email"
        ]
      },
      {
        "type": "password",
        "name": "password",
        "validation": [
          "required"
        ]
      },
      {
        "type": "text",
        "name": "firstname",
        "validation": [
          "required"
        ]
      },
      {
        "type": "text",
        "name": "lastname",
        "validation": [
          "required"
        ]
      }
    ],
    "marketingdetails": [
      {
        "type": "email",
        "name": "emailid",
        "validation": [
          "required,email"
        ]
      },
      {
        "type": "password",
        "name": "password",
        "validation": [
          "required"
        ]
      },
      {
        "type": "text",
        "name": "firstname",
        "validation": [
          "required"
        ]
      },
      {
        "type": "text",
        "name": "lastname",
        "validation": [
          "required"
        ]
      }
    ]
  };

  private formJson = [];

  constructor() { }

  ngOnInit() {
    this.formJson = Object.keys(this.inputJson).map(key => this.inputJson[key]);
  }

  onUserCreation(userData) {
    console.log(userData);
  }

}
