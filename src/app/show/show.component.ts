import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  public employee:Employee;

  constructor(
    public empService:EmpService,
    public route:ActivatedRoute,
    public router:Router
    ) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    var id = this.route.snapshot.params['id'];
      this.empService.getEmployee(id)
        .subscribe(employee => {
            this.employee = employee;
        })
  }

  goBack(){
    this.router.navigate(['/home'])  
  }
}
