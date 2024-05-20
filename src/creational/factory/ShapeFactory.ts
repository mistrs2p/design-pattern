import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Square } from "./Square";
import { Rectangle } from "./Rectangle";

export class ShapeFactory {
  createShape(shapeType: string): Shape | null {
    switch (shapeType.toLowerCase()) {
      case "circle":
        return new Circle();
      case "square":
        return new Square();
      case "rectangle":
        return new Rectangle();
      default:
        return null;
    }
  }
}
