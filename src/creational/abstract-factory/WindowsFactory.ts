import { GUIFactory } from "./GUIFactory";
import { Button } from "./Button";
import { CheckBox } from "./CheckBox";
import { WindowsButton } from "./WindowsButton";
import { WindowsCheckbox } from "./WindowsCheckbox";

export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): CheckBox {
    return new WindowsCheckbox();
  }
}
