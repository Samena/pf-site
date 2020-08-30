import React from 'react';
import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import MoneyIcon from '@material-ui/icons/MonetizationOnOutlined';
import PracticalIcon from '@material-ui/icons/VerifiedUserOutlined';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const Styles = styled.div`
.home {
    background-color: #00000;
    color: #1a1373;
    padding-left: 3%;
    padding-right: 3%;
}

.homeText {
    font-weight: 500;
}

.whatIsText{
    background-color: #00000;
    color: #1a1373;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 2%;
}

.whoAreWe{
    background-color: #00000;
    color: #1a1373;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 1%;
    padding-bottom: 2%;
}

.wrapperText{
    margin-top:42px;
    margin-bottom: 42px;
}
.paper{
    padding: 20px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

.homepage-icon{
    font-size: 70px;
}

.icon-title{
    margin-top: 10px;
}

.aboutUsDiv{
    background-color: #E2EBE1;
    height: 300px;
}

.main-title{
    font-family: 'Raleway';
    font-weight: 600;
    color: #456742;
}
}

`;


export const Home = () => (
    <Styles>
        <Grid container spacing={5}>
            <Grid item xs={6} sm={4}>
                <Box className="paper">
                    <EcoOutlinedIcon className="homepage-icon" />
                    <Typography className="icon-title">Sustainable</Typography>
                </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Box className="paper">
                    <PracticalIcon className="homepage-icon" />
                    <Typography className="icon-title">Practical</Typography>
                </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Box className="paper">
                    <MoneyIcon className="homepage-icon" />
                    <Typography className="icon-title">Affordable</Typography>
                </Box>
            </Grid>
        </Grid>

        <Grid container className="aboutUsDiv" spacing={3} direction="row"
  alignItems="center"
  justify="center">
            <Grid item xs={12} sm={9} className="paper">
                    <Typography variant="h5" className="main-title">WHAT IS POUCHFUL?</Typography>
                    <Typography variant="body1" className="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis libero odio, 
                        id vulputate justo sollicitudin eu. Quisque tincidunt lacus dignissim sodales malesuada. 
                        Phasellus id dolor molestie, egestas erat sit amet, fermentum lorem. Quisque mattis quam efficitur 
                        ex congue tincidunt. Cras id gravida orci. Vestibulum ante ipsum primis in faucibus orci luctus et 
                        ultrices posuere cubilia curae; Aliquam tempus tincidunt elit. Ut dignissim mollis fermentum. Aliquam 
                        pharetra elit eget odio viverra, ut condimentum augue tincidunt. Nullam tristique eros nec ex rutrum 
                        blandit. Aliquam gravida justo ac semper maximus. Etiam rutrum eros at nisl sagittis rutrum. Suspendisse 
                        porttitor quam id enim auctor malesuada. Ut et mollis mi.</Typography>

            </Grid>
        </Grid>
    </Styles>
)