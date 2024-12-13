import { Link } from "react-router-dom"
import { NavLink } from "./NavLink"
import {
    IconHomeFilled, IconChecklist, IconFilePlus, IconSearch, IconX, IconMenu2, 
    IconPlanet
} from "@tabler/icons-react"
import { useState } from "react"

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    const navLinks = [
        { to: "/", icon: <IconHomeFilled size={18} />, text: "Home" },
        { to: "/tasks", icon: <IconChecklist size={18} />, text: "Tasks" },
        { to: "/create", icon: <IconFilePlus size={18} />, text: "Create Tasks" },
        { to: "/search", icon: <IconSearch size={18} />, text: "Search" },
        
    ]

    return (
        <nav className="bg-gradient-to-r from-blue-800  to-blue-50 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-white flex items-center">
                    
                        PlanIt
                        <IconPlanet
                            className="ml-2 text-white" />
                    </Link>
                    <div
                        className={`
                            space-x-4
                            xs:hidden
                            lg:flex 
                    `}
                    >
                        {
                            navLinks.map((link, i) => {
                                return (
                                    <NavLink
                                        key={`key-${i}`}
                                        to={link.to}
                                        icon={link.icon}
                                        text={link.text} 
                                        />
                                )
                            })
                        }
                    </div>

                    <button
                        onClick={handleToggleMobileMenu}
                        className="md:hidden text-gray-500"
                    >
                        {!isMobileMenuOpen ? <IconMenu2 size={24} /> : <IconX size={24} />}
                    </button>
                </div>
                {
                    isMobileMenuOpen && (
                        <div
                            className="md:hidden py-4"
                        >
                            <div
                                className="space-y-2"
                            >
                                {
                                    navLinks.map((link) => {
                                        return (
                                            <NavLink
                                                to={link.to}
                                                icon={link.icon}
                                                text={link.text} />
                                        )
                                    })

                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}