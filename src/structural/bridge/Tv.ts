// Tv.ts
import { Device } from './Device';

export class Tv implements Device {
    private on: boolean = false;
    private volume: number = 50;
    private channel: number = 1;

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
        return this.channel;
    }

    setChannel(channel: number): void {
        this.channel = channel;
    }
}
