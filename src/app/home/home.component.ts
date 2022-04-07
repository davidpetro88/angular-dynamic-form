import { Component, OnInit } from '@angular/core';
import {ApiService} from "../integration/api.service";
import {FormGroupModel} from "../form/form.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jsonFormData?: FormGroupModel;

  constructor(private readonly _api: ApiService) { }

  ngOnInit(): void {
    this._api.getFormFields().subscribe(formResult => {
      console.log('my form-dynamic result ---> ', formResult);
      this.jsonFormData = formResult;
    })
  }

}
