export interface FormControlValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

export interface FormControlOption {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

export interface FormControlModel {
  name: string;
  label: string;
  value: string;
  type: string;
  typeValue: string;
  options?: FormControlOption;
  required: boolean;
  validators: FormControlValidators;
}

export interface FormGroupModel {
  controls: FormControlModel[];
}
