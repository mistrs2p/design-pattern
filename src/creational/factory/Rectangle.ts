import { Shape } from "./Shape";

export class Rectangle implements Shape {
  draw(): void {
    console.log("Drawing a Rectangle");
  }
}
