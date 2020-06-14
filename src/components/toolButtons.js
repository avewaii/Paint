import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import PaletteIcon from '@material-ui/icons/Palette';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import CachedIcon from '@material-ui/icons/Cached';

const Tools = () => {
    return (
        <ButtonGroup variant="text"
        color="primary" 
        fullWidth="true"
        size="large"
        color="primary"
        aria-label="text primary button group">
            <Button>
              <CreateIcon fontSize="large"/>
            </Button>
            <Button>
              <PaletteIcon fontSize="large"/>
            </Button>
            <Button>
              <RadioButtonUncheckedIcon fontSize="large"/>
            </Button>
            <Button>
              <CropSquareIcon fontSize="large"/>
            </Button>
            <Button>
              Line
            </Button>
            <Button>
              <CachedIcon fontSize="large"/>
            </Button>
         </ButtonGroup>
    )
};

export default Tools;