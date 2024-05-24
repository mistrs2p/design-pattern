// SugarDecorator.ts
import { Coffee } from './Coffee';
import { CoffeeDecorator } from './CoffeeDecorator';

export class SugarDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getDescription(): string {
        return `${this.decoratedCoffee.getDescription()}, Sugar`;
    }

    getCost(): number {
        return this.decoratedCoffee.getCost() + 0.5;
    }
}