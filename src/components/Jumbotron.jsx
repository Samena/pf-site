import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image from '../assets/bag.jpeg';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const Styles = styled.div`
.jumbo{
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 500px;
    position: relative;

}

.button-overlay{
    background-color: black;
    color: white;
    margin-top: 10px;
    border-radius: 25px;
    &:hover {
        background-color: #578565;
      }
}

.mainText{
    font-family: 'Raleway';
    margin-top: 250px;
    font-weight: 600;
}`;

export const Jumbotron = () =>(
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
                <Container>
                    <Typography variant="h3" className="mainText">
                   Save up to £30 with Pouchful this Autumn!
                   </Typography> 
                <Button className="button-overlay" variant="contained">Shop Now</Button>
            </Container>
            </div>
        </Jumbo>
    </Styles>

)