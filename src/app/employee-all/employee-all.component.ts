import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css'],
})
export class EmployeeAllComponent implements OnInit {
  //define array variable
  employees: Employee[] = [];
  message: string = '';

  //DI
  constructor(private service: EmployeeService, private router:Router) {}

  ngOnInit(): void {
    this.fetchAllEmployees();
  }

  //call service method to fetch data
  fetchAllEmployees() {
    this.service.fetchAllEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteEmployee(id: number) {
    this.service.removeOneEmployee(id).subscribe(
      (data) => {
        this.message=data;
        this.fetchAllEmployees();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editEmployee(id: number) {
    this.router.navigate(['edit',id]);
  }
}
