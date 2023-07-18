import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  //Form Backing Object
  employee : Employee = new Employee(0,'',0,'','','');
  message : string = '';
  //DI
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee() {
    this.service.createEmployee(this.employee)
    .subscribe(data=>{
      this.message = data;
      this.employee = new Employee(0,'',0,'','','');
    },error=>{
      console.log(error);
      this.message = 'Unable to save! Contact Admin';
    });
  }
}
