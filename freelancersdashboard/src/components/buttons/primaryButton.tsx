type ButtonProps = {
    action: string;
}

 const PrimaryButton = ({action} : ButtonProps) => {

    return (
        <>
            <button className="button primaryButton"> { action } </button>
        </>
    )
}

export default PrimaryButton

