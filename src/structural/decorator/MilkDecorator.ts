// MilkDecorator.ts
import { Coffee } from './Coffee';
import { CoffeeDecorator } from './CoffeeDecorator';

export class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getDescription(): string {
        return `${this.decoratedCoffee.getDescription()}, Milk`;
    }

    getCost(): number {
        return this.decoratedCoffee.getCost() + 1.5;
    }
}

