import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  //Form Backing Object
  employee : Employee = new Employee(0,'',0,'','','');

  constructor(private service:EmployeeService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //read parameter from routing
    const id = this.activatedRoute.snapshot.params['id'];
    //make service call to fetch data and fill in employee
    this.service.fetchOneEmployee(id)
    .subscribe(data=>{
      this.employee=data;
    },error=>{
      console.log(error);
      this.router.navigate(['list']);
    })
  }

  updateEmployee(){
    this.service.updateOneEmployee(this.employee)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
    },error=>{
      console.log(error);
    })
  }

}
