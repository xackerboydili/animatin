import React from "react";
import { Container, Button, ActiveBtn, Rotate, } from "./styled";

import {ThemeProvider, createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
background: ${(props) => props.theme.bg};
color: ${(props) => props.theme.cl}
}
`;



class Student extends React.Component{
state = {
    light: true
}


    render(){

        const theme = {
            bg: this.state.light ? 'white' : 'black',
            cl: this.state.light ? 'black' : 'white'
        }

        return(
            <ThemeProvider theme={theme}>

                <GlobalStyle/>

                <Button onClick={()=> this.setState({light: !this.state.light})}>Click</Button>
                <ActiveBtn>Active</ActiveBtn>
                <Rotate>rotation</Rotate>
            </ThemeProvider>
        )
    }
}

export default Student