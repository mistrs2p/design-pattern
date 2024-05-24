// main.ts
import { SimpleCoffee } from './SimpleCoffee';
import { MilkDecorator } from './MilkDecorator';
import { SugarDecorator } from './SugarDecorator';
import { MochaDecorator } from './MochaDecorator';

function main() {
    let myCoffee = new SimpleCoffee();
    console.log(`${myCoffee.getDescription()} costs $${myCoffee.getCost()}`);

    myCoffee = new MilkDecorator(myCoffee);
    console.log(`${myCoffee.getDescription()} costs $${myCoffee.getCost()}`);

    myCoffee = new SugarDecorator(myCoffee);
    console.log(`${myCoffee.getDescription()} costs $${myCoffee.getCost()}`);

    myCoffee = new MochaDecorator(myCoffee);
    console.log(`${myCoffee.getDescription()} costs $${myCoffee.getCost()}`);
}

main();