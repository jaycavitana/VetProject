import React, { useState, useEffect } from 'react'
import ClientIcon from '../../images/client.png'
import {Link, Navigate} from "react-router-dom";
import api from '../../api/api'
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

import {
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input
} from 'reactstrap'

import {CircularProgress, TextField} from '@mui/material'


const Signin = () => {

    const [redirect, setRedirect]= useState(0)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorModal, setErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successModal, setSuccessModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingModal, setIsLoadingModal] = useState(true)
    const [modalForgotPassword, setModalForgotPassword] = useState(false)
    const [error, setError] = useState(0)

    const toggleErrorModal = () => {
        setErrorModal(!errorModal)
    }

    const handleEnter = (e) => {
        if(e.charCode === 13){
            handleLogin()
        }
    }

    const resetState = () => {
        setEmail("")
        setPassword("")
    }
    
    const toggleModalForgotPassword = () => {
        setModalForgotPassword(!modalForgotPassword)
    }

    const toggleSuccessModal = () => {
        setSuccessModal(!successModal)
        setModalForgotPassword(!modalForgotPassword)
    }

    const handleForgotPassword = () => {
        setIsLoadingModal(false)
        const emailPayload = {
            email
        }
        if(email == ""){
            setErrorMessage('All fields are required.')
            setErrorModal(true)
            setIsLoadingModal(true)
            setError(1)
            return false
        }
        api.post('Owners/forgot_password_owner', emailPayload)
        .then(res => {
            console.log(res)
            if(res.message){
                setSuccessModal(true)
                setSuccessMessage(res.message)
                setIsLoadingModal(true)
                setEmail('')
            }
            else
                return null
        })
        .catch(err => {
            console.log(err.response)
            setErrorMessage(err.response.data.message + ' Please check your email.')
            setErrorModal(true)
            setIsLoadingModal(true)
            setError(1)
        })

    }


    const handleLogin = () => {
        setIsLoading(false)
        if(email == "" || password == ""){
            setErrorModal(true)
            setErrorMessage('All fields are required!')
            setIsLoading(true)
            return false
        }
        const loginPayload = {
            email,
            password
        }
        api.post('Owners/login', loginPayload)
        .then(res => {
            console.log(res)
            if(res.token){
                sessionStorage.setItem('token', res.token)
                setRedirect(1)
                setIsLoading(true)
                resetState()
            }
            else{
                setErrorModal(true)
                setIsLoading(true)
                setErrorMessage(res.message)
                return false
            }
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        sessionStorage.clear()
    }, [])

    if(redirect == 1){
        return <Navigate to= "/Client/Profile"/>
    }

    return (
        <>
         {/** ERROR MODAL */}
            <Modal centered backdrop="static" size="md" isOpen={errorModal}>
                <ModalHeader>
                    Notice!
                </ModalHeader>
                <ModalBody>
                    {errorMessage}
                </ModalBody>
                <ModalFooter>
                <button className="btnCancel" onClick={toggleErrorModal}>OK</button>
                </ModalFooter>
            </Modal>
             {/** SUCCESS MODAL */}
            <Modal centered backdrop="static" size="md" isOpen={successModal}>
                <ModalHeader>
                    Success!
                </ModalHeader>
                <ModalBody>
                    {successMessage}
                </ModalBody>
                <ModalFooter>
                <button className="btnAdd" onClick={toggleSuccessModal}>OK</button>
                </ModalFooter>
            </Modal>
            {/** FORGOT PASSWORD MODAL */}
            <Modal centered backdrop="static" size="md" isOpen={modalForgotPassword}>
                <ModalHeader>
                    Forgot Password?
                </ModalHeader>
                <ModalBody>
                <TextField
                    label="Email"
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                    onChange={e=> setEmail(e.target.value)}
                />
                <br/>
                </ModalBody>
                <ModalFooter>
                    <CircularProgress hidden={isLoadingModal}/>
                    <button hidden={!isLoadingModal} className='btnCancel' onClick={toggleModalForgotPassword}>Close</button>
                    <button hidden={!isLoadingModal} className="btnAdd" onClick={handleForgotPassword}>Send</button>
                </ModalFooter>
            </Modal>
            <Container>
                <FormWrap>
                    <Icon to="/">Petra</Icon>
                    <FormContent>
                        <Form>
                            <FormRow>
                                <FormH1>Sign in as Pet Owner</FormH1>
                                <Img src={ClientIcon}></Img>  
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput 
                                    onChange={e=> setEmail(e.target.value)} 
                                    type='email' 
                                    onKeyPress={handleEnter}
                                    required>                      
                                </FormInput>
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput 
                                    type='password' 
                                    onChange={e=> setPassword(e.target.value)}
                                    onKeyPress={handleEnter}
                                    required>
                                </FormInput>
                                <div hidden={isLoading} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <CircularProgress />
                                </div>
                                <FormButton hidden={!isLoading} onClick={handleLogin}>Log In</FormButton>
                                <Text onClick={toggleModalForgotPassword}>Forgot Password?</Text>
                            </FormRow>
                        </Form>
                        
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
