import React from "react";
import { useSpring, animated } from "react-spring";
import "./doodleContainer.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) =>
  `translate3d(${x / 8 + 75}px,${y / 8 - 200}px,0) rotate(${45}deg)`;
const trans3 = (x, y) =>
  `translate3d(${x / 6 - 190}px,${y / 6 - 110}px,0) rotate(${-45}deg)`;
const trans4 = (x, y) =>
  `translate3d(${x / 3.5 - 100}px,${y / 3.5 + 200}px,0) rotate(${25}deg)`;

const DoodleContainer = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="dooddlecontainer"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className="card2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className="card3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className="card4"
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
};

export default DoodleContainer;
