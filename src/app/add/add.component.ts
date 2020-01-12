import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public model = new Employee();

  constructor(
    public empService:EmpService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
  }

  addEmployee() {
    this.empService.addEmployee(this.model)
      .subscribe(() => this.goBack())
  }

  goBack(){
    this.router.navigate(['/home'])  
  }
}
