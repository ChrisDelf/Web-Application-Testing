import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const Dashboard = ({striker, ball}) => {

  return (
    <Card>
    <Button onClick ={striker}>Strike</Button>
    <Button onClick ={ball}>Ball</Button>
    <Button>Foul</Button>
    <Button>Hit</Button>
    </Card>
  );
};

export default Dashboard;
