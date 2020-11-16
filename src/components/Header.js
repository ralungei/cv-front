import { Box, Link, makeStyles } from '@material-ui/core'
import React, { Fragment } from 'react'
import withStyles from "@material-ui/styles/withStyles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import headerLogo from ""

const styles = theme => ({
    logo: {
        width: "124px",
    }
})

function Header(props) {
    const { classes } = props;

    return (
        <Fragment>
            <header className="App-header">
                <AppBar color="transparent" position="static">
                    <Toolbar>
                        <Box ml={4}><img src="/header_logo.png" className={classes.logo} alt="logo" /></Box>
                        <Box ml={4}><Button>Home</Button></Box>
                        <Box ml={4}><Button>Employment</Button></Box>
                        <Box ml={4}><Button>Projects</Button></Box>


                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </header>
        </Fragment>
    )
}

export default withStyles(styles)(Header)
