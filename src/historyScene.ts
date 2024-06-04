import { Color, Engine, Scene } from "excalibur";

export class historyScene extends Scene {
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Red
    }
}