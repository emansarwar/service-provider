import { Container, Grid } from '@mui/material';
import React from 'react';
// import TimeList from './DrawerrChild';
import DrawerrChild from './DrawerrChild';

const timelists = [
  {
      id: 1,
      time: '10.00 AM - 11.00 AM',
  },
  {
      id: 2,
      time: '11.00 AM - 12.00 PM',
  },
  {
      id: 3,
      time: '12.00 AM - 01.00 PM',
  },
  {
      id: 4,
      time: '02.00 AM - 03.00 PM',
  },
  {
      id: 5,
      time: '03.00 AM - 04.00 PM',
  },
  {
      id: 6,
      time: '04.00 AM - 05.00 PM',
  },
  {
      id: 7,
      time: '05.00 AM - 06.00 PM',
  },
  {
      id: 8,
      time: '06.00 AM - 07.00 PM',
  },
  {
      id: 9,
      time: '07.00 AM - 08.00 PM',
  },
  {
      id: 10,
      time: '08.00 AM - 09.00 PM',
  }
]

const Drawerr = ({date}) => {
// console.log(date.toString())
console.log(date)

  return (
    <Container  style={{height: 53}}>
      <h2>{date.toDateString()}</h2>
      <Grid style={{marginTop: 50}}>
        {
          timelists.map(timelist =><DrawerrChild
          key={timelist.id}
          timelist={timelist}
          />)
        }
      </Grid>

    </Container>
  );
};

export default Drawerr;