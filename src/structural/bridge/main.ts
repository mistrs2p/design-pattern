// main.ts
import { Tv } from './Tv';
import { Radio } from './Radio';
import { RemoteControl } from './RemoteControl';
import { AdvancedRemoteControl } from './AdvancedRemoteControl';

function main() {
    const tv = new Tv();
    const radio = new Radio();

    const basicRemote = new RemoteControl(tv);
    const advancedRemote = new AdvancedRemoteControl(radio);

    console.log('Testing basic remote with TV:');
    basicRemote.togglePower();
    basicRemote.volumeUp();
    console.log(`TV volume: ${tv.getVolume()}`);

    console.log('Testing advanced remote with Radio:');
    advancedRemote.togglePower();
    advancedRemote.volumeUp();
    advancedRemote.mute();
    console.log(`Radio volume: ${radio.getVolume()}`);
}

main();