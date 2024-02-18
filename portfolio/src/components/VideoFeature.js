import React, { useEffect, useRef } from 'react';

import skate_video from "../assets/skatefall.mp4";

const VideoFeature = () => {
  const setHeightRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;

    const setVideoHeight = () => {
      const playbackConst = 500;
      if (vid) {
        setHeightRef.current.style.height = `${Math.floor(vid.duration) * playbackConst}px`;
      }
    };

    const scrollPlay = () => {
      const playbackConst = 500;
      const frameNumber = window.pageYOffset / playbackConst;
      if (vid) {
        vid.currentTime = frameNumber;
      }
      window.requestAnimationFrame(scrollPlay);
    };

    vid.addEventListener('loadedmetadata', setVideoHeight);
    window.requestAnimationFrame(scrollPlay);

    return () => {
      vid.removeEventListener('loadedmetadata', setVideoHeight);
    };
  }, []);

  return (
    <div>
      <div ref={setHeightRef}></div>
      <p id="time"></p>
      <video id="v0" tabIndex="0" autoBuffer="autoBuffer" preload="preload" ref={videoRef} style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%'
      }}>
        <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src={skate_video}></source>
      </video>
    </div>
  );
};

export default VideoFeature;
