/**
 * Title: Login page
 * Author: Sri Ramya Basam
 * Date: 2023/02/03
 * Reference: https://mui.com/material-ui/getting-started/overview/,
 *  https://levelup.gitconnected.com/how-to-create-a-navigation-bar-with-material-ui-9cbcfcec2570
 * https://regex101.com/library/rP6sA9
 */

import React, { useState } from "react";
import { Grid,Paper, TextField, Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { InputLabel } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import Tab from '@material-ui/core/Tab';
import Header from './Header';
import Footer from './Footer';

const Login=()=>{
    const backGroundStyle={padding :20,height:'50vh',width:280, margin:"20px auto"}
    const buttonstyle={margin:'9px 0'}
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState();
    const navigatePage = useNavigate(); 
    const VALID_FORMAT_ONLY = "Enter valid email format"
    const NO_ERROR = "";
    const EMPTY_FIELD = "This cannot be empty";
    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const handleEmailInput = (event) => {
        console.log(event.target.value);
        if(event.target.value) {
            
            EMAIL_REGEX.test(event.target.value) ? setEmailErrorMessage(NO_ERROR) : setEmailErrorMessage(VALID_FORMAT_ONLY);
        }
        else {
            setEmailErrorMessage(EMPTY_FIELD);
        }
        setEmail(event.target.value);
    }   
    const onSubmit = (event) => {
        event.preventDefault(); 
        
        if (email === 'ramya@gmail.com' && password==='Qwer!234') {
            navigatePage('/home') 
        }
        else {
            alert("Please provide valid details");
            window.location.reload();           
            navigatePage('/') 
        }        
           
    };

    return(
        <form onSubmit={onSubmit}>
            <Grid>
            <InputLabel >SIGN IN</InputLabel>
            <Paper elevation={8} style={backGroundStyle}>            
                <TextField label='Email' placeholder='Enter email' fullWidth value={email} required onChange={handleEmailInput}/>
                <p style={{color:"Red"}}>
                    {emailErrorMessage}
                </p>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth  required value={password} onChange={(event) => setPassword(event.target.value)}/>
                <br/><br/>

                <NavLink className="navbar-item" activeClassName="is-active"  style={{ display: "flex",marginRight:"auto" , marginTop:"auto" }} align="right"  to="/ForgotPassword">Forgot Password?</NavLink>
                <br/>
                <Button type='submit' color='primary' variant="contained"  style={buttonstyle} fullWidth>LOGIN</Button> 
                  <br></br> <br></br>
                <InputLabel >Need an account?  
                <NavLink className="navbar-item" activeClassName="is-active" to="/signup"> Register</NavLink>                                            
                </InputLabel>
            </Paper>           
        </Grid>
        <br></br>
        <br></br>
    
        <div style={{position: 'absolute', bottom: '0px', width: '100%'}}> <Footer />  </div>  
        </form>  

        
               
    )
}

export {Login};