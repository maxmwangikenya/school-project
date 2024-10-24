import React, { useRef } from 'react';
import './VideoPlayer.css';
import Video from '../../assets/StudentsVideo.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const close = (event) => {
        if (event.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div 
            className={`video-player ${playState ? '' : 'hide'}`} 
            ref={player} 
            onClick={close}
        >
            <video src={Video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
