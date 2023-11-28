import CustomButton from "./CustomButton";

const Link = ({ history, to, className, ...props }) => {
    return (
        <CustomButton type="link" className={`underline ${className}`} {...props}/>
    );
};

export default Link;