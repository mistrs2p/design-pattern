import { House } from "./House";
export interface HouseBuilder {
  buildFoundation(): void;
  buildStructure(): void;
  buildRoof(): void;
  buildInterior(): void;
  getHouse(): House;
}
