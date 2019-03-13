import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function HeaderMenu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" variant="h6" color="inherit">Matrix 2*2</Link>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Typography variant="h6" color="inherit">
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderMenu);