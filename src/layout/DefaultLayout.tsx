import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Hidden } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const DefaultLayout: React.FC = (props) => {
    const classes = useStyles()
    return <>
        <Hidden smUp>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Z ORG
                         </Typography>
                </Toolbar>
            </AppBar>
        </Hidden>
        <Grid container>
            <Hidden xsDown>
                <Grid item sm={4} md={3} lg={2}>
                    menu
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} md={9} lg={10}>
                {props.children}
            </Grid>
        </Grid>
    </>
};


export default DefaultLayout