import { GUIFactory } from "./GUIFactory";
import { Button } from "./Button";
import { CheckBox } from "./CheckBox";
import { MacButton } from "./MacButton";
import { MacCheckbox } from "./MacCheckbox";

export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): CheckBox {
    return new MacCheckbox();
  }
}
