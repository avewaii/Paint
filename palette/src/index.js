import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid  from '@material-ui/core/Grid';


import Header from './components/Header';
import Tools from './components/toolButtons';
import Content from './components/Content';


function App() {
  return (
    <Grid container direction='column' spacing='3'>
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={0} sm={3}/>
        <Grid item xs={12} sm={6} spacing={2}>
          <Tools/>
        </Grid>
        <Grid item xs={0} sm={3}/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}/>
        <Grid item container xs={12} sm={8}>
              <Content/>
        </Grid>
        <Grid item xs={0} sm={2}/>
      </Grid>  
      {/* <Button variant="contained" color="primary">
          Hello World
      </Button>   */}
    </Grid>
    
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));