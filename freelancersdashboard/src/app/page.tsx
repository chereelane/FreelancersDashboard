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

type buttonType = string
export default function Home() {

    const [loginOpen, setLoginOpen] = useState(false);
    const loginRef = useRef(null)
    const [signupOpen, setSignupOpen] = useState(false)
    const handleLoginOpen = (e: any) => {
        e.preventDefault()
        setLoginOpen(!loginOpen)
        console.log(loginOpen)
    }

    const handleSignUpOpen = (e: any) => {
        e.preventDefault()
        setLoginOpen(!signupOpen)
        console.log(loginOpen)
    }

    useEffect(() => {

    }, [loginOpen, signupOpen])

  return (
    <main className="flex flex-col min-h-screen min-w-screen relative laptop:relative">
        <div className="heroContainer">
            <div className="heroSection">
                <div className="contentContainer">
                    <h3 className="heroTitle">Freelancers Dashboard</h3>
                    <p className="subHeadline">Streamlining customer management just got easier with all your favorite tools accessible in one place.</p>
                    <div className="buttonGroupContainer">
                        <button className="button secondaryButton" onClick={handleLoginOpen}>Log In </button>
                        <button className="button primaryButton" onClick={handleSignUpOpen}> Sign Up </button>
                        {/*<Login/>*/}

                    </div>

                </div>

                <div className="imageDiv">
                    <Image className="heroImage" src={heroImage} width={500} height={500} alt="freelancer working"/>
                </div>
            </div>


        </div>

        {/*Login & Sign Up*/}
        {/*Write logic to hide when off button is clicked*/}
        <div className="loginContainer">
            <Login/>
            {/*<SignUp/>*/}
        </div>

    </main>
  )
}
