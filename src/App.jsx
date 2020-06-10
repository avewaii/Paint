import React from "react";

import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Tools from './components/toolButtons';
import Content from './components/Content';
import DiscreteSlider from './components/ChangeWidthOfBrush';

export default class App extends React.Component {

    render() {
        return (
            <Grid container direction='column' spacing='3'>
                <Grid item>
                    <Header/>
                </Grid>
                <Grid item container spacing={2}>
                    <Grid item xs={0} sm={3}/>
                    <Grid item xs={12} sm={6}>
                        <Tools/>
                    </Grid>
                    <Grid item xs={0} sm={3}/>
                </Grid>
                <Grid item container>
                    <Grid item xs={0} sm={3}/>
                    <Grid item container xs={12} sm={6} direction='column' spacing={3}>
                        <Grid item>
                            <Content/>
                        </Grid>
                        <Grid item>
                            <DiscreteSlider/>
                        </Grid>
                    </Grid>
                    <Grid item xs={0} sm={3}/>
                </Grid>
            </Grid>
        )
    }

}