import React from 'react';
import '../styles/MainVideo.scss';

const MainVideo = () => {
    return (
        <div className="relative w-full h-screen">
            <video className="absolute w-full h-full object-cover" src="/DBGAMING.mp4" autoPlay loop muted></video>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <p>
                    <img src="/yingwen.png" alt='txt'/>
                </p>
            </div>            
        </div>
    );
}

export default MainVideo;