    import { useState } from 'react';
    import { VolumeX, Volume1 } from 'lucide-react';
    export default function SoundToggle() {
        const [soundEnable, setSoundEnable] = useState(false);
        return (
                <h1 className=' cursor-pointer flex gap-2' onClick={() => setSoundEnable(!soundEnable)}>
                    { soundEnable ? <Volume1 /> : <VolumeX />} 
                    <span className='click-sound'>Sound : {soundEnable ? 'On' : 'Off'}</span>
                </h1>
        )
    }