import {Component, OnInit} from '@angular/core';
import {ApiService} from "../integration/api.service";
import {FormBuilder} from "@angular/forms";
import {FormGroupModel} from "../form/form.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form = this.fb.group({});
  jsonFormData?: FormGroupModel;

  constructor(private readonly _api: ApiService,
              private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this._api.getFormEdit().subscribe(formResult => {
      this.jsonFormData = formResult;
    });
  }

  onSubmit() {
    console.log('Form valid: ', this.form.valid);
    console.log('Form values: ', this.form.value);
  }
  // getFormControl(): FormGroup {
  //   return this.form?.get(deliveryOptions.deliveries[0].code) as FormGroup
  // }
}
