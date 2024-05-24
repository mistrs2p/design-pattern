// Radio.ts
import { Device } from './Device';

export class Radio implements Device {
    private on: boolean = false;
    private volume: number = 30;
    private station: number = 101.1;

    isEnabled(): boolean {
        return this.on;
    }

    enable(): void {
        this.on = true;
    }

    disable(): void {
        this.on = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(percent: number): void {
        this.volume = percent;
    }

    getChannel(): number {
        return this.station;
    }

    setChannel(station: number): void {
        this.station = station;
    }
}