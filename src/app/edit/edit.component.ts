import { Component, OnInit } from '@angular/core';
import {JsonFormData} from "../form/form.component";
import {ApiService} from "../integration/api.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  jsonFormData?: JsonFormData;

  constructor(private readonly _api: ApiService) { }

  ngOnInit(): void {
    this._api.getFormEdit().subscribe(formResult => {
      this.jsonFormData = formResult;
    });
  }
}
