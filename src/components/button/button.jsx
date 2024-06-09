import {MdMessage} from "react-icons/md";
import Styles from "./button.module.css";

const Button = ({isEmail, icon, text, ...rest}) => {
    return (
        <button 
        {...rest}
        
        className={isEmail ? Styles.email_btn : Styles.primary_btn}>
            {icon}
            {text}
        </button>
    );
};


export default Button;