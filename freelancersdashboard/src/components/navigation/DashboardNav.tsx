import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";
const DashboardNav = () => {
    return (
        <>
            <nav className="dashboardNav">
                <div className="mobileNav laptop:hidden">
                    <IconButton className="menuIconBtn">
                        <MenuIcon className="menuIcon" />
                    </IconButton>
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
                        <AccountCircleIcon className="userIcon"/>
                    </div>
                </div>




            </nav>
        </>
    )
}

export default DashboardNav