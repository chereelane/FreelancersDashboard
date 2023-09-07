import Image from 'next/image'
// import heroImage from '../assets/identify-customer.svg'
// import heroImage from '../assets/identify-customer-larger.svg'
import heroImage from '../assets/identify-customer-md.svg'
import SecondaryButton from "@/components/buttons/secondaryButton";
import PrimaryButton from "@/components/buttons/primaryButton";

type buttonType = string
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen justify-center items-center laptop:relative">
        <div className="heroContainer">
            <div className="heroSection">
                <div className="contentContainer">
                    <h3 className="heroTitle">Freelancers Dashboard</h3>
                    <p className="subHeadline">Streamlining customer management just got easier with all your favorite tools accessible in one place.</p>
                    <div className="buttonGroupContainer">
                       <SecondaryButton action="Log In"/>
                        <PrimaryButton action="Sign Up"/>

                    </div>
                </div>

                <div className="imageDiv">
                    <Image className="heroImage" src={heroImage} width={500} height={500} alt="freelancer working"/>
                </div>

            </div>
        </div>
    </main>
  )
}
