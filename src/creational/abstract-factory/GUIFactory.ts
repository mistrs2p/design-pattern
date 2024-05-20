import { Button } from "./Button";
import { CheckBox } from "./CheckBox";

export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): CheckBox;
}