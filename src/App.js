import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Chat from './components/Chat/Chat';

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <main className="container">
        {/* <Sample></Sample> */}
        <Chat></Chat>
      </main>
    </div>
  );
}

export default App;
