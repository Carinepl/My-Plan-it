interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text:string
}

export const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-500">
            {text}
        </label>
    )
}