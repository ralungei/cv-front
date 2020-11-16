import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header';
import { Box, Button, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bigSection: {
    position: "relative"
  },
  bigVideo: {
    width: "100%",
    height: "100%",
    // clipPath: "rectangle(60px 40px at 75px 30px)",
    maskImage: "linear-gradient(black 0%, transparent 100%)",
    objectFit: "cover"


  },
  content: {
    position: "absolute",
    top: "10%"
  }

}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <main>
        <Box className={classes.bigSection}>
          <Header />

          <video src={"./SampleVideo.mp4"} autoPlay="false" className={classes.bigVideo} />
          <Container className={classes.content} fixed>
            <Box className={classes.titleContainer}>
              <Box display="inline-flex">
                <img src="./r_logo.png" style={{ width: 15 }} />
                <Typography variant="h7" component="h2">FILM</Typography>
              </Box>

              <Typography variant="h3" component="h2">ABOUT ME</Typography>
              <Box display="inline-flex">
                <Typography variant="h1" component="h1">2020</Typography>
                <Typography variant="h5" component="h2">23+</Typography></Box>
            </Box>

            <Box className={classes.descriptionContainer}>
              <Typography variant="body" component="h2">Spain, early 2000s. A Romanian family arrives at Spain looking for a better place to raise their kids. Twenty years later, their youngest child decides to make his dream come true. He starts a journey to become a developer at the best IT company in the world.</Typography>
            </Box>

            <Button>LinkedIn</Button>
            <Button>Github</Button>
            <Typography variant="body" component="h2">Email: ras.alungei@gmail.com</Typography>

          </Container>
        </Box>
      </main>
      {/* <footer>
        <Container>Any footer </Container></footer> */}
    </div >

  );
}

export default App;
