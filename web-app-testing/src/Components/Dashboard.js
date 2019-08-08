import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


const Dashboard = ({ striker, ball, hit, foul }) => {
  return (
    <Card>
      <Button className = 'gameButton' onClick={striker}>Strike</Button>
      <Button className = 'gameButton' onClick={ball}>Ball</Button>
      <Button className = 'gameButton' onClick={foul}>Foul</Button>
      <Button className = 'gameButton' onClick={hit}>Hit</Button>
    </Card>
  );
};

export default Dashboard;
