import {FC , memo}  from  "react";
import {ButtonHTMLAttributes} from  "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?  : "primary" | "secondary";
    children : string;
}

const Button: FC<Props> = ({children , className ,theme , ...rest}) => {    
    const themeClasses = theme === "primary" ? "bg-indigo-500 hover:bg-indigo-600" : "bg-gray-500 hover:bg-gray-600";

    return(
        <button
        {...rest}
            type="submit"
            className={"group relative w-4/3 shadow-DEFAULT  flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white  " + themeClasses  + " "  + className }
        >
            {children}
        </button>         
    );
};

Button.defaultProps = {
    theme : "primary"
}

export default memo(Button);