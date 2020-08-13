import React, { useState } from 'react';
import styled from 'styled-components';



const MyForm = styled.form`
    margin: 10px;
    display: flex;
    flex-direction: column;
    
`
const Add = styled.button`
    border: none;
    background: none;
    position: absolute;
    right: 15%;
    top: 35px;
    cursor: pointer;
    color: grey;
    font-size: 20px;
    

    &:focus{
        outline: none;
    }
`

const Input = styled.input`
    border: 5px solid white;
    box-shadow: 0 0 10px grey;
    border-radius: 10px;
    text-align: center;
    width: 80vw;
    height: 50px;
    margin: 10px;
    

box-shadow:  20px 20px 60px #666666, 
             -20px -20px 60px #ffffff;
    &:focus{
        outline: none;
    }
`


export const Form = ({ term, setTerm, todos, onFormSubmit }) => {




    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    const onInputClick = () => {
        setTerm('')

    }

    return(
        <MyForm onSubmit={onFormSubmit} >
    
            <Input onClick={onInputClick} onChange={onInputChange} value={term}></Input>
            
        </MyForm>
    )
}