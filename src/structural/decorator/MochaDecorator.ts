// MochaDecorator.ts
import { Coffee } from './Coffee';
import { CoffeeDecorator } from './CoffeeDecorator';

export class MochaDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getDescription(): string {
        return `${this.decoratedCoffee.getDescription()}, Mocha`;
    }

    getCost(): number {
        return this.decoratedCoffee.getCost() + 2;
    }
}