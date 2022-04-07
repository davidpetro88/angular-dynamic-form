import { Component, OnInit } from '@angular/core';
import {JsonFormData} from "../form/form.component";
import {ApiService} from "../integration/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  jsonFormData?: JsonFormData;

  constructor(private readonly _api: ApiService) { }

  ngOnInit(): void {
    this._api.getFormRegister().subscribe(formResult => {
      this.jsonFormData = formResult;
    });
  }
}
