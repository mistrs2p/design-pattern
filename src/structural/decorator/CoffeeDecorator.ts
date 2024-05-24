// CoffeeDecorator.ts
import { Coffee } from './Coffee';

export abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }

    getDescription(): string {
        return this.decoratedCoffee.getDescription();
    }

    getCost(): number {
        return this.decoratedCoffee.getCost();
    }
}