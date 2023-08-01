import { Box, Container, TextField } from "@mui/material";
import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import TextField from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Timezone from "./Timezone";
// import Drawerr from "./Drawer/Drawerr";
import { isWeekend } from "date-fns";

const Calender = ({ date, setDate }) => {
    
    
  return (
    <Box
    
     >
      <LocalizationProvider
      
      dateAdapter={AdapterDateFns}>
        <StaticDatePicker
        
        displayStaticWrapperAs="desktop"
        value={date}
        
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        >
        
        
          </StaticDatePicker>
      </LocalizationProvider>
      
      <Container style={{marginLeft: 40}}>
        
          <h4 style={{marginBottom: 0}} align="left" color={"black"}>
            Time zone
          </h4>
           <Timezone ></Timezone>
        </Container>
      
    </Box>
  );
};

export default Calender;
