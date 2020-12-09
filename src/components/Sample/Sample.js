import React, { useRef, useState } from 'react';
import Lottie from "react-lottie";
import animationData from "../../lotties/40486-animoji-girl-like.json";
import Chime from "../../sounds/chime.wav"

const Sample = () => {
    const lottieAnimation = useRef();

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleMouseEnter = () => {
        if (lottieAnimation) {
            lottieAnimation.current.anim.setSpeed(1.5)
            lottieAnimation.current.anim.setDirection(1)
            lottieAnimation.current.anim.play()
            const audio = new Audio(Chime)
            audio.play();
        }
    };

    const handleMouseLeave = () => {
        if (lottieAnimation) {
            lottieAnimation.current.anim.setDirection(-1)
            lottieAnimation.current.anim.setSpeed(2.5)
        }
    };


    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Lottie
            ref={lottieAnimation}
            options={defaultOptions}
            height={300}
            width={300}
            speed={1.5}
        />
    </div>
}

export default Sample