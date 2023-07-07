import { forwardRef, useImperativeHandle, useRef } from 'react';
import video from '../../assets/video/test1.mp4';

const Video = (props, ref) => {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    return <video ref={videoRef} src={video} width={'100%'} autoPlay style={{ borderRadius: '10px' }} />;
};

export default forwardRef(Video);
