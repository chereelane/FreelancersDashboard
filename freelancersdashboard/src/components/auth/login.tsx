import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContext from "@mui/material/Dialog/DialogContext";
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete'

import TextField from '@mui/material/TextField'
import googleIcon from '../../assets/icons8-google-48.png'
import magicLinkIcon from '../../assets/icons8-magic-48.png'
import {useState} from "react";

import Image from "next/image";
import {ButtonGroup, DialogContentText} from "@mui/material";

type LoginProps = {
    isOpen: boolean;
}

const Login = () => {

    return (
            <Dialog open={true} className="dialogContainer">
                <div className="flex justify-end">
                    <IconButton >
                        <CloseIcon className="-bg--dark-primary-color text-white"/>
                    </IconButton>
                </div>

                <DialogTitle className="dialogTitle" >Log In</DialogTitle>
                <DialogContent className="dialogContent">
                    <DialogContentText className="dialogErrorMessage">
                        Error, email or password is not found
                    </DialogContentText>
                    <TextField fullWidth className="authInput" placeholder={"email address"} type="email" label="email address"/>
                    <TextField className="authInput" placeholder={"password"} type="password" label="password"/>
                </DialogContent>
                <DialogActions>
                    <ButtonGroup className="logInAuthContainer">
                        <Button className="googleBtn">
                            <Image src={googleIcon} alt="google icon" width={18} height={18} />
                            Log in with Google
                        </Button>
                        <Button className="magicLinkBtn">
                            <Image src={magicLinkIcon} alt="magic link icon" width={18} height={18} />
                            Log in with Magic Link
                        </Button>
                        <Button className="logInSubmitBtn primaryButton">Log In</Button>
                    </ButtonGroup>
                </DialogActions>
            </Dialog>
    )
}

export default Login