import menuIcon from '../../assets/icons8-menu-30.png'
import Image from "next/image";
const NavBar = () => {
    return(

        <>
            <nav className="navBar">
                <div className="logoContainer">
                    <h5 className="logo">Freelancers Dashboard</h5>
                </div>
                <div className="navLinksContainer">
                    <p className="hover:font-extrabold">How does it work?</p>
                </div>
            </nav>
        </>
    )
}

export default NavBar