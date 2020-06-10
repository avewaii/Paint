import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-restrict" gutterBottom>
        Width of brush
      </Typography>
      <Slider
        defaultValue={1}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="auto"
      />
    </div>
  );
}