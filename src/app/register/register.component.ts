import { Component, OnInit } from '@angular/core';
import {ApiService} from "../integration/api.service";
import {FormGroupModel} from "../form/form.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  jsonFormData?: FormGroupModel;

  constructor(private readonly _api: ApiService) { }

  ngOnInit(): void {
    this._api.getFormRegister().subscribe(formResult => {
      this.jsonFormData = formResult;
    });
  }
}
