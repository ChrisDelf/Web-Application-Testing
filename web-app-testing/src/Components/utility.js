import React, { useState } from 'react';
import ReactDOM from 'react-dom';



export const handleStriker = () => {
 const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);
  if (strike >= 2) {
    setStrike(0);
    setBall(0);
  } else {
    setStrike(strike + 1);
  }
};

export const handleBall = () => {

  if (ball >= 3) {
    setBall(0);
    setStrike(0);
  } else {
    setBall(ball + 1);
  }
};

export const handleHit = () => {

  setHit(hit + 1);
  setBall(0);
  setStrike(0);
  setFoul(0);
};

export const handleFoul = () => {

  if (strike === 0) {
    handleStriker();
    setFoul(foul + 1);
  } else {
    setStrike(0);
    setBall(0);
  }
};
