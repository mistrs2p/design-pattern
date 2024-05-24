// Department.ts
import { OrganizationComponent } from './OrganizationComponent';

export class Department implements OrganizationComponent {
    private name: string;
    private components: OrganizationComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    getDetails(): string {
        const componentDetails = this.components.map(component => component.getDetails()).join('\n  ');
        console.log(this.components)
        return `${this.name}\n  ${componentDetails}`;
    }

    add(component: OrganizationComponent): void {
        this.components.push(component);
    }

    remove(component: OrganizationComponent): void {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }
}