import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FormGroupModel} from "../form/form.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFormFields(): Observable<FormGroupModel> {
    return this.http.get<FormGroupModel>(`assets/api/form.json`);
  }

  getFormRegister(): Observable<FormGroupModel> {
    return this.http.get<FormGroupModel>(`assets/api/register.json`);
  }

  getFormEdit(): Observable<FormGroupModel> {
    return this.http.get<FormGroupModel>(`assets/api/edit.json`);
  }
}
