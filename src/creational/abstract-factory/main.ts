import { FactorySelector } from "./FactorySelector";
import { Application } from "./Application";
import { GUIFactory } from "./GUIFactory";

function main(): void {
    const osType: string = 'Windows';
    const factory: GUIFactory = FactorySelector.getFactory(osType);
    const app: Application = new Application(factory);
    app.paint();
}

main();