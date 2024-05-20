import { HouseBuilder } from "./HouseBuilder";

export class Director {
  private builder!: HouseBuilder;

  setBuilder(builder: HouseBuilder): void {
    this.builder = builder;
  }

  constructHouse(): void {
    this.builder.buildFoundation();
    this.builder.buildStructure();
    this.builder.buildRoof();
    this.builder.buildInterior();
  }
}
