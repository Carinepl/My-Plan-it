export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
    return (
        <input
            {...rest}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
    )
}