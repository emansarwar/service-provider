import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {  Divider, Typography} from "@mui/material";
import  img  from "../navbarimg/nav-big-img.png";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Calender from "./Calender/Calender";
import './Banner.css'
import Drawerr from "./Calender/Drawer/Drawerr";


const Banner = () => {
  const [date, setDate] = React.useState(new Date());
  console.log(date)
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <Box style={{ marginTop: 130, marginLeft: 70, marginRight: 70}}>
      <Typography style={{marginBottom: 20}} variant="h2">Schedule Call</Typography>
      
      <Box  sx={{ flexGrow: 1}}>
        <Grid container>
        <Grid item xs={12} md={4.5}>
          <Item>
            
            <img src={img} alt="hyperlink" width={300}/>
            
            
            <Divider className="divider" style={{ marginBottom: 25, marginTop: 30}}/>
          
            
            <Typography variant="h6" color='grey' style={{ textAlign: "left"}}>Hyperlink Infosystem</Typography>
            <Typography variant="h4" color='black' style={{ textAlign: "left"}}>Introduction Call With Hyperlink Infosystem</Typography>
            <Box display={"flex"}  style={{ textAlign: "left", marginTop: 20, marginBottom: 15}}>
            <Typography color='grey'><AccessTimeIcon/></Typography>
            <Typography color='grey' style={{ textAlign: "left", marginLeft: 5}}>30 min</Typography>
            </Box>
            <Typography
            color="black"
            variant="h5"
            style={{textAlign: "left"}}>{date.toDateString()}</Typography>
            <Typography color='grey' style={{ textAlign: "left"}}>Agenda</Typography>
            <Typography color='grey' style={{ textAlign: "left"}}>1. Introduction of Hyperlink infosystem</Typography>
            <Typography color='grey' style={{ textAlign: "left"}}>2. Requirement understanding</Typography>
            <Typography color='grey' style={{ textAlign: "left"}}>3. Similar work showcase</Typography>
            <Typography color='grey' style={{ textAlign: "left"}}>4. Next actions</Typography>
            <Box display={"flex"} style={{marginTop: 20}}>
            <Typography color='blue'  style={{ textAlign: "left",}}>
              Cookie settings
            </Typography>
            <Typography color="black" style={{ marginLeft: 5, marginRight: 5}}>|</Typography>
            <Typography color='blue'  style={{ textAlign: "left",}}>
              Report abuse
            </Typography>
            </Box>
          </Item>
        
        </Grid>
       
    <Grid item xs={12} md={4.5}>
      <Item>
            <Calender date={date} setDate={setDate}
            
            ></Calender></Item>
        
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Item>
            
            <Drawerr date={date} ></Drawerr>
          </Item>
        </Grid>
        </Grid>
   </Box>

    </Box>
    
    
  );
};

export default Banner;
