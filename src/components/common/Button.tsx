interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "danger";

}
export const Button: React.FC<ButtonProps> = ({ variant, ...rest }) => {
    return (
        <button
            {...rest}
            className={`
        px-4
        py-2
        border
        rounded-md
        shadow-sm
        tesxt-sm
        font-medium
        focus:outline-none
        focus:rind-2
        focus:ring-offset-2
        ${variant === "primary" && "border-transparent text-white hover:bg-purple- focus:ring-purple-800 bg-purple-800"}
        ${variant === "secondary" && "px-4 py-2 border border-gray-300  text-gray-700 hover:bg-gray-50  focus:ring-purple-950"}
        ${variant === "danger" && "px-4 py-2 border border-red-600  text-white hover:bg-red-700  focus:ring-red-500 bg-red-600"}
       `} >
            {rest.children}
        </button>
    )
}