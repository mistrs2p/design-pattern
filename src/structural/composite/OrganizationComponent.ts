// OrganizationComponent.ts
export interface OrganizationComponent {
    getName(): string;
    getDetails(): string;
    add(component: OrganizationComponent): void;
    remove(component: OrganizationComponent): void;
}