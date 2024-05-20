import { ShapeFactory } from "./ShapeFactory";

const shapeFactory= new ShapeFactory()

const shape1 = shapeFactory.createShape('CIRCLE')
shape1?.draw()

const shape2 = shapeFactory.createShape('SQUARE')
shape2?.draw()

const shape3 = shapeFactory.createShape('RECTANGLE')
shape3?.draw()