import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid  from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CreateIcon from '@material-ui/icons/Create';
import PaletteIcon from '@material-ui/icons/Palette';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import CachedIcon from '@material-ui/icons/Cached';


import Content from './components/Content';
import Header from './components/Header';


function App() {
  return (
    <Grid container direction='column'>
        <Grid item container>
          <Header/>
        </Grid>
        <Grid item>
          Tool buttons
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>
              <CreateIcon/>
            </Button>
            <Button>
              <PaletteIcon/>
            </Button>
            <Button>
              <RadioButtonUncheckedIcon/>
            </Button>
            <Button>
              <CropSquareIcon/>
            </Button>
            <Button>
              Line
            </Button>
            <Button>
              <CachedIcon/>
            </Button>
         </ButtonGroup>

        </Grid>
        <Grid item container>
            <Grid item xs={0} sm={2}/>
            <Grid item container xs={12} sm={8}>
                  <Content/>
            </Grid>
            <Grid item xs={0} sm={2}/>
          
          
             <Button variant="contained" color="primary">
                 Hello World
             </Button>
        
        </Grid>
    </Grid>
    
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));