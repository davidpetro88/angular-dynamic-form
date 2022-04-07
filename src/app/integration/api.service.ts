import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {JsonFormData} from "../form/form.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFormFields(): Observable<JsonFormData> {
    return this.http.get<JsonFormData>(`assets/api/form.json`);
  }

  getFormRegister(): Observable<JsonFormData> {
    return this.http.get<JsonFormData>(`assets/api/register.json`);
  }

  getFormEdit(): Observable<JsonFormData> {
    return this.http.get<JsonFormData>(`assets/api/edit.json`);
  }
}
