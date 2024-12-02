import { Link } from "react-router-dom"
interface NavLinkProps {
    to: string;
    text: string;
    icon: React.ReactNode;
    onClick?: () => void;
}
export const NavLink: React.FC<NavLinkProps> = ({ to, icon, text }) => {
    return (
        <Link to={to} className="flex items-center space-x-1 text-gray-500 hover:text-blue-700 transition-colors duration-200">
            {icon}
            <span>{text}</span>
        </Link>
    )
}