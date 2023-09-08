'use client'
import Image from 'next/image'
// import heroImage from '../assets/identify-customer.svg'
// import heroImage from '../assets/identify-customer-larger.svg'
import heroImage from '../assets/identify-customer-md.svg'
import SecondaryButton from "@/components/buttons/secondaryButton";
import PrimaryButton from "@/components/buttons/primaryButton";
import {useEffect, useRef, useState} from "react";
import Login from "@/components/auth/login";
import SignUp from "@/components/auth/signup";
import Link from 'next/link';
import NavBar from "@/components/navigation/NavBar";

type buttonType = string
export default function Home() {

    const [loginOpen, setLoginOpen] = useState(false);
    const loginRef = useRef(null)
    const [signupOpen, setSignupOpen] = useState(false)
    return (
        // IF NOT AUTHENTICATED YET
        <div>
            <NavBar/>
            <main className="flex flex-col min-h-screen min-w-screen relative laptop:relative z-0">
                {/*<Login/>*/}
                <div className="heroContainer z-10">
                    <div className="heroSection">
                        <div className="contentContainer z-20">
                            <h3 className="heroTitle">Freelancers Dashboard</h3>
                            <p className="subHeadline">Streamlining customer management just got easier with all your favorite tools accessible in one place.</p>

                            <div className="buttonGroupContainer">
                                <button className="button secondaryButton">Log In</button>

                                {/*<button className="button secondaryButton"><Link href="logIn">Log In </Link></button>*/}
                                <button className="button primaryButton" > Sign Up </button>

                            </div>

                        </div>

                        <div className="imageDiv">
                            <Image className="heroImage" src={heroImage} width={500} height={500} alt="freelancer working"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>


  )
}
