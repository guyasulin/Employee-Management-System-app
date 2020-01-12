import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public model = new Employee();
  public employee: Employee;
  public id = this.route.snapshot.params['id'];

  constructor(
    public empService: EmpService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getEmployee()
  }

  updateEmployee() {
    this.empService.updateEmployee(this.id, this.model)
      .subscribe(() => this.goBack())
  }

  getEmployee() {
    this.empService.getEmployee(this.id)
      .subscribe(employee => {
        this.model = employee;
      })
  }

  goBack() {
    this.router.navigate(['/home'])
  }
}
