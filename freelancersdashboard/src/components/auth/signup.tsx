import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {ButtonGroup, DialogContentText} from "@mui/material";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Image from "next/image";
import googleIcon from "@/assets/icons8-google-48.png";
import magicLinkIcon from "@/assets/icons8-magic-48.png";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const SignUp = () => {
    return (
        <Dialog open={true} className="dialogContainer">
            <IconButton className="flex justify-end">
                <CloseIcon className="-bg--dark-primary-color text-white"/>
            </IconButton>
            <DialogTitle className="dialogTitle" >Sign Up</DialogTitle>
            <DialogContent className="dialogContent">
                <DialogContentText className="dialogErrorMessage">
                    Error, email or password is not found
                </DialogContentText>
                <TextField placeholder={"email address"} type="email" label="email address"/>
                <TextField placeholder={"password"} type="password" label="password"/>
            </DialogContent>
            <DialogActions>
                <ButtonGroup className="logInAuthContainer">
                    <Button className="googleBtn">
                        <Image src={googleIcon} alt="google icon" width={18} height={18} className="btnIcon" />
                        Sign up with Google
                    </Button>
                    <Button className="magicLinkBtn">
                        <Image src={magicLinkIcon} alt="magic link icon" width={18} height={18} className="btnIcon" />
                        Sign up with Magic Link
                    </Button>
                    <Button className="logInSubmitBtn primaryButton">Sign Up</Button>
                </ButtonGroup>


            </DialogActions>
        </Dialog>
    )
}

export default SignUp