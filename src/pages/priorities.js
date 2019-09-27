import React, { Fragment } from 'react';
import HeaderMenu from '../components/Shared/HeaderMenu';
import Container from '../components/Shared/Container/Container';
import Canvas from '../components/Canvas';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});



function App(props) {

  const { classes } = props;
 
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderMenu />
      <Container>

      <h2>Eisenhower Matrix</h2>
      <div className="wrapper">
        <div className="vertical-title-all">
            <div className="vertical">Importance</div>
        </div>

        <div className="border">
            <div className="sub-title">Important, Not Urgent</div>

         </div>
        <div className="border">
            <div className="sub-title">Important, Urgent</div>

        </div>
        <div className="border">

            <div className="sub-title">Not Important, Not Urgent</div>
            
        </div>
        <div className="border">
            
            <div className="sub-title">Not Important, Urgent</div>

        </div>

        <div className="horizont-title horizont-title-all">Urgency</div>
    </div>


      </Container>
    </React.Fragment>
  );
}

App.propTypes = {
};

export default withStyles(styles)(App);


// https://habr.com/ru/post/317344/