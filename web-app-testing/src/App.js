import React from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Display from './Components/Display';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">

    <Display />
      </Container>
    </React.Fragment>
  );
}

export default App;
