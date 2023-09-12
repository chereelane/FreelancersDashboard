import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'


import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import ForumIcon from '@mui/icons-material/Forum';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";
import {MenuList} from "@mui/material";
const DashboardNav = () => {
    return (
        <>
            <nav className="dashboardNav">
                <div className="mobileNav tablet:hidden">
                    <Stack direction="row" spacing={2}>
                        <MenuList>
                            <IconButton className="menuIconBtn">
                                <MenuIcon className="menuIcon" />
                            </IconButton>
                            {/*<MenuItem>Profile</MenuItem>*/}
                            {/*<MenuItem>Account</MenuItem>*/}
                            {/*<MenuItem>Logout</MenuItem>*/}
                        </MenuList>
                    </Stack>
                </div>

                <div className="desktopNav">
                    <div className="dashboardNavLogoContainer">
                        <h5 className="logo">Freelancers Dashboard</h5>
                    </div>

                    <div className="desktopLinksContainer">
                        <ul className="desktopNavLinks">
                            <li className="desktopNavItem"><Link href="#">Customer Dashboard</Link></li>
                            <li className="desktopNavItem"><Link href="#">Mail</Link>l</li>
                            <li className="desktopNavItem"><Link href="#">Alerts</Link></li>
                            <li className="desktopNavItem"><Link href="#">Inquiries</Link></li>
                        </ul>
                    </div>

                    <div className="userIconContainer">
                        <Stack direction="row" spacing={2}>
                            <MenuList>
                                <IconButton className="menuIconBtn">
                                    <AccountCircleIcon className="userIcon"/>
                                </IconButton>
                                {/*<MenuItem>Profile</MenuItem>*/}
                                {/*<MenuItem>Account</MenuItem>*/}
                                {/*<MenuItem>Logout</MenuItem>*/}
                            </MenuList>
                        </Stack>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DashboardNav