// main.ts
import { Employee } from './Employee';
import { Department } from './Department';

function main() {
    const john = new Employee('John Doe', 'Developer');
    const jane = new Employee('Jane Smith', 'Designer');
    const mike = new Employee('Mike Johnson', 'Manager');

    const devDepartment = new Department('Development Department');
    devDepartment.add(john);
    devDepartment.add(jane);

    const hrDepartment = new Department('HR Department');
    hrDepartment.add(mike);

    const company = new Department('Company');
    company.add(devDepartment);
    company.add(hrDepartment);

    console.log(company.getDetails());
}

main();