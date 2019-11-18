import { Component } from '@angular/core';

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent {
  employees: any[];

  constructor() {
    this.employees = [
        { code: 'emp001', name: 'Aaa', gender: 'Male', annualSalary: 100, dateOfBirth: '25/6/1988' },
        { code: 'emp002', name: 'Bbb', gender: 'Male', annualSalary: 2000.12, dateOfBirth: '9/6/1982' },
        { code: 'emp003', name: 'Ccc', gender: 'Male', annualSalary: 4000, dateOfBirth: '12/8/1979' },
        { code: 'emp004', name: 'Ddd', gender: 'Female', annualSalary: 2540.46, dateOfBirth: '14/10/1980' },
    ];
  }

  getEmployees() {
    this.employees = [
      { code: 'emp001', name: 'Aaa', gender: 'Male', annualSalary: 100, dateOfBirth: '25/6/1988' },
      { code: 'emp002', name: 'Bbb', gender: 'Male', annualSalary: 2000.12, dateOfBirth: '9/6/1982' },
      { code: 'emp003', name: 'Ccc', gender: 'Male', annualSalary: 4000, dateOfBirth: '12/8/1979' },
      { code: 'emp004', name: 'Ddd', gender: 'Female', annualSalary: 2540.46, dateOfBirth: '14/10/1980' },
      { code: 'emp005', name: 'Eee', gender: 'Female', annualSalary: 2710.44, dateOfBirth: '17/08/1995' },
  ];
  }
    trackByEmpCode(index: number, employee: any): string {
      return employee.code;
  }

}
