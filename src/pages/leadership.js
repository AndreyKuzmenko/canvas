import React, { Fragment } from 'react';
import HeaderMenu from '../components/Shared/HeaderMenu';
import Container from '../components/Shared/Container/Container';
import Canvas from '../components/Canvas';
import CssBaseline from '@material-ui/core/CssBaseline';



import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'fixed',
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

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <HeaderMenu />
      <Container>

      <h2>Leadership styles</h2>
    <div className="wrapper">
        <div className="title">
            <div className="vertical">Result</div>
        </div>

        <div className="border">
            <div className="sub-title">Producer</div>
            <img src={imgProducer}/>
        </div>
        <div className="border">
            <div className="sub-title">Entrepreneur</div>
            <img src={imgEnprepreneur}/>
        </div>

        <div className="title">
            <div className="vertical">Process</div>
        </div>
        <div className="border">
            
            <div className="sub-title">Administrator</div>
            <img src={imgAdministrator}/>
        </div>
        <div className="border">
        <div className="sub-title">Integrator</div>
            <img src={imgIntegrator}/>
            
        </div>

        <div className="horizont-title horizont-title-2">Short term</div>
        <div className="horizont-title">Long term</div>
    </div>

      </Container>
    </Fragment>
  );
}


App.propTypes = {
};

export default withStyles(styles)(App);





// https://habr.com/ru/post/317344/