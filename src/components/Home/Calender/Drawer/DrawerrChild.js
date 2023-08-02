import { Button, Grid } from '@mui/material';
import React from 'react';
import InputField from './InputField';

const DrawerrChild = ({timelist}) => {
    const {time} = timelist;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Grid item xs={12} sm={12} md={12}>
            <Button
            onClick={handleOpen}
            style={{marginBottom: 2}} variant='contained'>{time}</Button>
        </Grid>
        <InputField
        timelist={timelist}
        open={open}
        handleClose={handleClose}
        ></InputField>
        </>
    );
};

export default DrawerrChild;