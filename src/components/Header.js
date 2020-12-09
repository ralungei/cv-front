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
        maxHeight: "60px",
        width: "100%"
    }
})

function Header(props) {
    const { classes } = props;

    return (
        <Fragment>

        </Fragment>
    )
}

export default withStyles(styles)(Header)
