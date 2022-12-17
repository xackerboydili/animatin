import { keyframes } from "styled-components";
import styled from "styled-components";

const Rotatation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`


export const Container = styled('div')`
background-color: coral;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    margin: 10px;
    width: 200px;
    height: 40px;
    background-color: gray;
    border-radius: 7px;
    cursor: pointer;
    :active{
        transform: scale(0.99);
        opacity: 0.7;
    }
`

export const ActiveBtn = styled(Button)`
    
`

export const Rotate = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid black;
    animation: ${Rotatation} 3s linear infinite;
`