import { GUIFactory } from "./GUIFactory";
import { Button } from "./Button";
import { CheckBox } from "./CheckBox";

export class Application {
  private button: Button;
  private checkBox: CheckBox;
  
  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkBox = factory.createCheckbox();
  }
  
  paint(): void {
    this.button.paint();
    this.checkBox.paint();
  }
}
