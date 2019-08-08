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
    if (strike >= 2) {
      setStrike(0);
      setBall(0);
    } else {
      setStrike(strike + 1);
    }
  };

  const handleBall = () => {
    if (ball >= 3) {
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
    setFoul(0);
  };

  const handleFoul = () => {
    if (strike === 0) {
      handleStriker();
      setFoul(foul + 1);
    } else {
      setStrike(0);
      setBall(0);
      setFoul(0);
    }
  };

  return (
    <Paper>
      <div className="cardCon">

        <Card className="tracker">Strikes {strike}</Card>
        <Card className="tracker">ball {ball}</Card>
        <Card className="tracker">foul {foul}</Card>
        <Card className="tracker">hit {hit}</Card>
      </div>

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
