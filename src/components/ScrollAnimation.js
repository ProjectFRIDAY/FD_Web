import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

export default function ScrollAnimation({ ...settings }) {
  return <AnimationOnScroll {...settings}></AnimationOnScroll>;
}