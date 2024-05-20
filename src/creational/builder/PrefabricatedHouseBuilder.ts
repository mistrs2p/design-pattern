import { HouseBuilder } from './HouseBuilder';
import { House } from './House';

export class PrefabricatedHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    buildFoundation(): void {
        this.house.setFoundation('Prefabricated blocks');
        console.log('PrefabricatedHouseBuilder: Foundation complete.');
    }

    buildStructure(): void {
        this.house.setStructure('Prefabricated panels');
        console.log('PrefabricatedHouseBuilder: Structure complete.');
    }

    buildRoof(): void {
        this.house.setRoof('Prefabricated panels');
        console.log('PrefabricatedHouseBuilder: Roof complete.');
    }

    buildInterior(): void {
        this.house.setInterior('Prefabricated panels');
        console.log('PrefabricatedHouseBuilder: Interior complete.');
    }

    getHouse(): House {
        return this.house;
    }
}