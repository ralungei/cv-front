import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import { Box, Button, Container, Typography } from '@material-ui/core';
import RingButton from './components/RingButton/RingButton';
import Sample from './components/Sample/Sample';

const useStyles = makeStyles((theme) => ({


}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <main>
        <Sample></Sample>
      </main>
    </div >

  );
}

export default App;
