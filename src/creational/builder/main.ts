import { Director } from './Director';
import { ConcreteHouseBuilder } from './ConcreteHouseBuilder';
import { PrefabricatedHouseBuilder } from './PrefabricatedHouseBuilder';

function main(): void {
    const director = new Director();

    // Construct a concrete house
    const concreteHouseBuilder = new ConcreteHouseBuilder();
    director.setBuilder(concreteHouseBuilder);
    director.constructHouse();
    const concreteHouse = concreteHouseBuilder.getHouse();
    console.log('Concrete House:');
    concreteHouse.show();

    console.log('');

    // Construct a prefabricated house
    const prefabricatedHouseBuilder = new PrefabricatedHouseBuilder();
    director.setBuilder(prefabricatedHouseBuilder);
    director.constructHouse();
    const prefabricatedHouse = prefabricatedHouseBuilder.getHouse();
    console.log('Prefabricated House:');
    prefabricatedHouse.show();
}

main();