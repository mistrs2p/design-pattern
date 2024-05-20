import { CheckBox } from "./CheckBox";

export class WindowsCheckbox implements CheckBox {
  paint(): void {
    console.log("Rendering a checkbox in Windows style");
  }
}
