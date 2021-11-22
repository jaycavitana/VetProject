import React, { useState } from 'react'
import ClientIcon from '../../images/client.png'
import {Link, Navigate} from "react-router-dom";
import { 
    Container, 
    FormWrap, 
    Icon, 
    FormContent, 
    Form, 
    FormH1, 
    FormLabel, 
    FormInput, 
    FormButton, 
    Text,
    FormRow,
    Img
} from './SigninElements'

const Signin = () => {

    const [redirect, SetRedirect]= useState(0)

    const handleLogin = () => {
        SetRedirect(1)
    }

    if(redirect == true){
        return <Navigate to= "/Client/Profile"/>
      }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Vetra</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormRow>
                                
                                <FormH1>Sign in to your account</FormH1>
                                <Img src={ClientIcon}></Img>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' required></FormInput>
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' required></FormInput>
                                <FormButton type='submit' onClick={handleLogin}>Log In</FormButton>
                                <Text>Forgot Password?</Text>
                            </FormRow>
                        </Form>
                        
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
