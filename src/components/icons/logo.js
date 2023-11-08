import React, { useEffect } from 'react';
import anime from 'animejs';

const IconLogo = ({ finishLoading }) => {
  useEffect(() => {
    const animate = () => {
      const loader = anime.timeline({
        complete: () => finishLoading(),
      });

      loader
        .add({
          targets: '#logoPath',
          duration: 1500,
          easing: 'easeInOutQuart',
          strokeDashoffset: [anime.setDashoffset, 0],
        })
        .add({
          targets: '#logoA',
          duration: 700,
          easing: 'easeInOutQuart',
          opacity: 1,
        })
        .add({
          targets: '#logo',
          duration: 300,
          easing: 'easeInOutQuart',
          opacity: 0,
          scale: 0.1,
        })
        .add({
          targets: '.loader',
          duration: 200,
          easing: 'easeInOutQuart',
          opacity: 0,
          zIndex: -1,
        });
    };

    animate();
  }, [finishLoading]);

  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
      <title>Logo</title>
      <g transform="translate(-8.000000, -2.000000)">
        <g id="logoA" transform="translate(11.000000, 5.000000)">
          <polygon
            id="logoPath"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0 0 42 0 42 60 21 90 0 60 0 0"
          />
          <path
            d="M21,30 C24,30 27,35 27,40 C27,45 24,50 21,50 C18,50 15,45 15,40 C15,35 18,30 21,30 M21,32 C19,32 17.5,36 17.5,40 C17.5,44 19,48 21,48 C23,48 24.5,44 24.5,40 C24.5,36 23,32 21,32"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconLogo;
