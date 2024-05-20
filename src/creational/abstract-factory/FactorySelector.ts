import { GUIFactory } from "./GUIFactory";
import { WindowsFactory } from "./WindowsFactory";
import { MacFactory } from "./MacFactory";

export class FactorySelector {
  static getFactory(osType: string): GUIFactory {
    switch (osType) {
      case "Windows":
        return new WindowsFactory();
      case "Mac":
        return new MacFactory();
      default:
        throw new Error("Invalid OS Type");
    }
  }
}
