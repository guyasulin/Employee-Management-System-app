import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { map } from 'rxjs-compat/operator/map';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:3000/api/employees')
    .map(res => res);
  }

  addEmployee(newEmployee){
    var headers = new HttpHeaders();
    // var newEmployee = new Employee();
    return this.http.post<Employee[]>('http://localhost:3000/api/employees' ,newEmployee,{headers:headers})
    .map(res => res);
  }

  getEmployee(id){
    return this.http.get<Employee>('http://localhost:3000/api/employees/'+id)
    .map(res => res);
  }

  deleteEmployee(id){
    return this.http.delete<Employee>('http://localhost:3000/api/employees/'+id)
    .map(res => res);
  }

  updateEmployee(id, newEmployee){
    return this.http.put<Employee>('http://localhost:3000/api/employees/'+id, newEmployee)
    .map(res => res);
  }
}


