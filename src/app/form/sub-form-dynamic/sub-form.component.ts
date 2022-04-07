import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormControlModel, FormGroupModel} from "../form.model";

@Component({
  selector: 'app-sub-form-dynamic-dynamic',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss']
})
export class SubFormComponent implements OnInit, OnDestroy {
  @Input() parentForm!: FormGroup;
  @Input() jsonFormData?: FormGroupModel;
  isFormLoad: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    setTimeout(() => {
      if (!!this.jsonFormData) {
        this._createForm(this.jsonFormData.controls);
        this.isFormLoad = true;
      }
    }, 100)

  }

  _createForm(controls: FormControlModel[]) {
    for (const control of controls) {
      const validatorsToAdd = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }

      this.parentForm.addControl(
        control.name,
        this.fb.control(this._castValue(control), validatorsToAdd)
      );
    }
  }

  _castValue(control: FormControlModel): any {
    switch (control.typeValue) {
      case 'number':
        return Number(control.value);
      case 'boolean':
        return control.value === 'true';
      default:
        return control.value;
    }
  }

  convertToBoolean(boolValue?: string): boolean {
    if (!!boolValue) return boolValue === 'true';
    return false;
  }

  convertToNumber(number?: string): number {
    if (!!number) return Number(number);
    return 0
  }

  ngOnDestroy(): void {
  }
}
