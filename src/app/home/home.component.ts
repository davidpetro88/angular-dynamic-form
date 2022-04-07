import { Component, OnInit } from '@angular/core';
import {ApiService} from "../integration/api.service";
import {JsonFormData} from "../form/form.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jsonFormData?: JsonFormData;

  constructor(private readonly _api: ApiService) { }

  ngOnInit(): void {
    this._api.getFormFields().subscribe(formResult => {
      console.log('my form result ---> ', formResult);
      this.jsonFormData = formResult;
    })
  }

}
