type ButtonProps = {
    action: string;
}

const SecondaryButton = ({action} : ButtonProps) => {

    return (
        <>
            <button className="button secondaryButton"> { action } </button>
        </>
    )
}

export default SecondaryButton