import { CheckBox } from "./CheckBox";

export class MacCheckbox implements CheckBox {
  paint(): void {
    console.log("Rendering a checkbox in Mac style");
  }
}
