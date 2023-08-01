import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { deepPurple, grey} from "@mui/material/colors";
import image from "../../navbarimg/navi-img.png"
import { Container } from "@mui/material";




export default function Nav1() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  style={{background: deepPurple[50], paddingTop: 5, paddingBottom: 10}} position="fixed">
        <Container>
        <Toolbar>
          
          {/* <Toolbar> */}
            <img src={image} alt="" />
            
            
              
          
          <Toolbar sx={{ marginLeft: "auto" }}>
            <Typography  component="div" sx={{ mr: 1,
            color: grey[900] }}>
              Company
            </Typography>
            <Typography  component="div" sx={{ mr: 1,
            color: grey[900] }}>
              Services
            </Typography>
            <Typography  component="div" sx={{ mr: 1,
            color: grey[900] }}>
              Hire Developers
            </Typography>
            <Typography  component="div" sx={{ mr: 1,
            color: grey[900] }}>
              Case Study
            </Typography>
            <Typography  component="div" sx={{ mr: 1,
            color: grey[900] }}>
              Resources
            </Typography>
            <Typography  component="div" sx={{ mr: 1,
            color: grey[900] }}>
              Contact Us
            </Typography>
            <Button color="inherit" style={{color: grey[900], background: grey[50],padding: 7, borderRadius: 10}} >Get A Free Qoute</Button>
          </Toolbar>
          
          
        </Toolbar>
        </Container>
        
      </AppBar>
    </Box>
  );
}
