import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import ReactAnime from 'react-animejs';
import { Box, Typography, Button } from '@material-ui/core';
import { Loading } from 'react-loading-dot';
import Lottie from 'react-lottie';
import animationData from '../../lotties/40486-animoji-girl-like.json';
import loadingDots from '../../lotties/loading-dots.json';
import { useSpring, animated, config } from 'react-spring';
import { Spring } from 'react-spring';

const Chat = () => {
  const { Anime, stagger } = ReactAnime;

  var getCurrentTime = function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var current = hours + minutes * 0.01;
    if (current >= 5 && current < 19) return 'Have a nice day';
    if (current >= 19 && current < 22) return 'Have a nice evening';
    if (current >= 22 || current < 5) return 'Have a good night';
  };

  // var messagesContent = [
  //   'Hey there 👋',
  //   "I'm Ras",
  //   'I design and code things on the web',
  //   'I\'m currently accepting freelance work.<br> You can contact me at <a href="mailto:hello@julian.gr">hello@julian.gr</a>',
  //   '<a target="_blank" href="https://twitter.com/juliangarnier">twitter.com/juliangarnier</a><br><a target="_blank" href="https://codepen.io/juliangarnier">codepen.io/juliangarnier</a><br><a target="_blank" href="https://github.com/juliangarnier">github.com/juliangarnier</a>',
  //   getCurrentTime(),
  //   '👀 J.',
  // ];

  const messagesContent = [
    `Hey there, I'm Ras 👋`,
    `We are about to meet each other 👀`,
    `Are you ready?`,
  ];

  const messagesWidths = ['400px', '620px', '300px'];

  function useStateAndRef(initial) {
    const [value, setValue] = useState(initial);
    const valueRef = useRef(value);
    valueRef.current = value;
    return [value, setValue, valueRef];
  }

  const [messages, setMessages] = useState([]);
  const [counter, setCounter, refCounter] = useStateAndRef(0);
  const lottieAnimation = useRef();
  const bubble = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const loadingDotsOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingDots,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (refCounter.current == messagesContent.length)
        return clearInterval(interval);

      setCounter((counter) => counter + 1);
      setMessages((messages) =>
        messages.concat(messagesContent[messages[messages.length + 1]])
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [toggle, setToggle] = useState(true);
  const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z';
  const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z';
  const styles = {
    container: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      willChange: 'background',
    },
    shape: { width: 300, height: 300, willChange: 'transform' },
  };

  const Content = ({
    toggle,
    color,
    scale,
    shape,
    start,
    end,
    stop,
    rotation,
  }) => (
    <div
      style={{
        ...styles.container,
        background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)`,
      }}
    >
      <svg
        style={{
          ...styles.shape,
          transform: `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation})`,
        }}
        version="1.1"
        viewBox="0 0 400 400"
      >
        <g
          style={{ cursor: 'pointer' }}
          fill={color}
          fillRule="evenodd"
          onClick={toggle}
        >
          <path id="path-1" d={shape} />
        </g>
      </svg>
    </div>
  );

  const [flip, set] = useState(false);
  const bubbleStyles = useSpring({
    config: { duration: 500 },
    delay: 500,
    loop: true,
    from: {
      borderBottomLeftRadius: '0rem',
      width: '130px',
    },
    to: {
      borderBottomLeftRadius: '10rem',
      width: '300px',
    },
  });
  return (
    <div>
      {/* <animated.div
        className="loading-bubble"
        style={useSpring({
          from: { borderRadius: '10rem 10rem 10rem 5rem' },
          to: { borderRadius: '5rem' },
          delay: 200,
        })}
      >
        hello
      </animated.div> */}

      {messages.map((m, i) => (
        <div>
          <Spring
            from={{ width: '120px', borderBottomLeftRadius: '0rem' }}
            to={{
              width: messagesWidths[i],
              borderBottomLeftRadius: '10rem',
            }}
            delay={1200}
            config={{ duration: 500 }}
          >
            {(styles) => (
              <animated.div className="loading-bubble" style={styles}>
                <Spring from={{ opacity: 1 }} to={{ opacity: 0 }} delay={1200}>
                  {(dotsStyles) => (
                    <animated.div className="loadingDots" style={dotsStyles}>
                      <Lottie
                        ref={lottieAnimation}
                        options={loadingDotsOptions}
                        height={100}
                        width={100}
                        speed={1.5}
                        isClickToPauseDisabled={true}
                      />
                    </animated.div>
                  )}
                </Spring>
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1700}>
                  {(messageStyles) => (
                    <animated.div style={messageStyles}>
                      <Typography
                        id={'message-content'}
                        ref={bubble}
                        className={'messageContent'}
                        style={messageStyles}
                        variant="h4"
                      >
                        {messagesContent[i]}
                      </Typography>
                    </animated.div>
                  )}
                </Spring>
              </animated.div>
            )}
          </Spring>
        </div>
      ))}

      <Button>Go!</Button>
      {/* <animated.div className="loading-bubble" style={bubbleStyles}>
        <div className="loadingDots">
          <Lottie
            ref={lottieAnimation}
            options={loadingDotsOptions}
            height={100}
            width={100}
            speed={1.5}
            isClickToPauseDisabled={true}
          />
        </div>
        <Typography
          className={'messageContent'}
          style={{ opacity: 0 }}
          variant="h4"
        >
          {messagesContent[0]}
        </Typography>
      </animated.div> */}

      {/*  */}

      {/* <Anime
        initial={[
          {
            targets: '.loadingDots',
            duration: 400,
            delay: 1000,
            keyframes: [
              {
                opacity: 0,
              },
            ],
          },
          {
            targets: '#loadingBubble',
            duration: 1000,
            delay: 4000,

            width: '100%',
            borderRadius: '5rem',
          },

          {
            targets: '.messageContent',
            duration: 400,
            delay: 0,
            keyframes: [
              {
                opacity: 1,
              },
            ],
          },
        ]}
      >
        <div style={{ display: 'inline-block' }}>
          <div id={`loadingBubble`} className={classNames('loading-bubble')}>
            <div className="loadingDots">
              <Lottie
                ref={lottieAnimation}
                options={loadingDotsOptions}
                height={100}
                width={100}
                speed={1.5}
                isClickToPauseDisabled={true}
              />
            </div>
            <Typography
              className={'messageContent'}
              style={{ opacity: 0 }}
              variant="h4"
            >
              {messagesContent[0]}
            </Typography>
          </div>
        </div>
      </Anime> */}
      {/* girl */}
      {/* <Anime
        key={`test`}
        initial={[
          {
            targets: `#loadingBubble`,
            keyframes: [],
            duration: 1000,
            easing: 'linear',
          },
        ]}
      >
        <div id={`loadingBubble`} className={classNames('loading-bubble')}>
          <span className={classNames('message')}>
            <Lottie
              ref={lottieAnimation}
              options={defaultOptions}
              height={300}
              width={300}
              speed={1.5}
              isClickToPauseDisabled={true}
            />
          </span>
        </div>
      </Anime> */}
      {/* {messages.map((m, i) => (
        <Anime
          key={`bubble-${i}`}
          initial={[
            {
              targets: `#bubble-${i}`,
              translateX: 50,
              keyframes: [
                {
                  translateX: 50,
                },
                {
                  translateY: 50,
                },
                {
                  translateX: 0,
                },
                {
                  translateY: 0,
                },
              ],
              easing: 'linear',
            },
          ]}
        >
          <div id={`bubble-${i}`} className={classNames('bubble')}>
            <span className={classNames('message')}>
              <Typography variant="h4">{messagesContent[i]}</Typography>
            </span>

          </div>
        </Anime>
      ))} */}
    </div>
  );
};

export default Chat;
