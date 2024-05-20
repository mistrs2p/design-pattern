import { House } from "./House";
import { HouseBuilder } from "./HouseBuilder";
export class ConcreteHouseBuilder implements HouseBuilder {
  private house: House;
  constructor() {
    this.house = new House();
  }
  buildFoundation(): void {
    this.house.setFoundation("Concrete, brick, and stone");
    console.log("ConcreteHouseBuilder: Foundation complete.");
  }

  buildStructure(): void {
    this.house.setStructure("Concrete, brick, and stone");
    console.log("ConcreteHouseBuilder: Structure complete.");
  }

  buildRoof(): void {
    this.house.setRoof("Concrete, brick, and stone");
    console.log("ConcreteHouseBuilder: Roof complete.");
  }

  buildInterior(): void {
    this.house.setInterior("Concrete, brick, and stone");
    console.log("ConcreteHouseBuilder: Interior complete.");
  }

  getHouse(): House {
    return this.house;
  }
}
