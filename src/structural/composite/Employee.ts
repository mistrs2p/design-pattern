// Employee.ts
import { OrganizationComponent } from './OrganizationComponent';

export class Employee implements OrganizationComponent {
    private name: string;
    private position: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    getName(): string {
        return this.name;
    }

    getDetails(): string {
        return `${this.name} (${this.position})`;
    }

    add(component: OrganizationComponent): void {
        throw new Error("Cannot add to an employee");
    }

    remove(component: OrganizationComponent): void {
        throw new Error("Cannot remove from an employee");
    }
}