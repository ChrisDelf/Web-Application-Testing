import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const Dashboard = props => {
  return (
    <Card>
    <Button>Strike</Button>
    <Button>Ball</Button>
    <Button>Foul</Button>
    <Button>Hit</Button>
    </Card>
  );
};

export default Dashboard;
