import React, { Fragment } from 'react';
import HeaderMenu from '../components/Shared/HeaderMenu';
import Container from '../components/Shared/Container/Container';
import Canvas from '../components/Canvas';





function App() {
  return (
    <Fragment>
      <HeaderMenu />
      <Container>
        <Canvas />
      </Container>
    </Fragment>
  );
}

export default App;
