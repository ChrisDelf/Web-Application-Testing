import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Dashboard from './Dashboard';

const Display = props => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);

  const handleStriker = () => {
    if (strike >= 3) {
      setStrike(0);
      setBall(0);
    } else {
      setStrike(strike + 1);
    }
  };

  const handleBall = () => {
    if (ball >= 4) {
      setBall(0);
      setStrike(0);
    } else {
      setBall(ball + 1);
    }
  };

  const handleHit = () => {
    setHit(hit + 1);
    setBall(0);
    setStrike(0);
    setFoul(0)
  };

  const handleFoul = () => {
    if (strike === 0) {
      handleStriker();
      setFoul(foul + 1)
    } else {
      setStrike(0);
      setBall(0);
    }
  };

  return (
    <Paper>
      <Card>Strikes {strike}</Card>
      <Card>ball {ball}</Card>
      <Card>foul {foul}</Card>
      <Card>hit {hit}</Card>
      <Dashboard
        key={strike.id}
        striker={handleStriker}
        ball={handleBall}
        hit={handleHit}
        foul={handleFoul}
      />
    </Paper>
  );
};

export default Display;
