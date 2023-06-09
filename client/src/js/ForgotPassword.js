/**
 * Title: Forgot password page
 * Author: Sri Ramya Basam & Aneri Shah (design changes)
 * Date: 2023/02/28
 * Reference: https://mui.com/material-ui/getting-started/overview/, 
 * https://levelup.gitconnected.com/how-to-create-a-navigation-bar-with-material-ui-9cbcfcec2570
 */
import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

const ForgotPassword = () => {
    const backGroundStyle = { padding: 20, height: 'auto', width: 280, margin: "10% auto" }
    const buttonstyle = { margin: '9px 0' }
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigatePage = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
        if (password === repassword) {
            alert("Password changed successfully");
            navigatePage('/')
        }
        else {
            alert("Passwords should match");
            window.location.reload();
            navigatePage('/ForgotPassword')
        }

    };
    return (
        <form onSubmit={onSubmit}>
            <Grid>
                <Paper elevation={8} style={backGroundStyle}>
                    <Typography variant="overline" display="block" gutterBottom>Forget Password!</Typography>
                    <img src='images/logo.png' style={{ height: "50%", width: '100%' }} alt='logo' />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required value={password} onChange={(event) => setPassword(event.target.value)} />
                    <TextField label='Confirm Password' placeholder='Re-enter password' type='password' fullWidth required value={repassword} onChange={(event) => setRepassword(event.target.value)} />
                    <Button type='submit' color='primary' variant="contained" style={buttonstyle} fullWidth>SUBMIT</Button>
                    <br></br>
                    <NavLink className="navbar-item" activeClassName="is-active" to="/"> Login</NavLink>
                </Paper>
            </Grid>

        </form>



    )
}

export { ForgotPassword };