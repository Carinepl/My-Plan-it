import { Link } from "react-router-dom"
import { NavLink } from "./NavLink"
import { IconHome, IconList, IconMenu, IconPlus, IconSearch, IconX } from "@tabler/icons-react"
import { useState } from "react"

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-blue-600">PlanIt</Link>
                    <div
                        className={`
                            space-x-4
                            xs:hidden
                            lg:flex 
                    `}
                    >
                        <NavLink
                            to="/"
                            icon={<IconHome size={18} />}
                            text="Home"
                        />
                        <NavLink
                            to="/tasks"
                            icon={<IconList size={18} />}
                            text="Tasks"
                        />
                        <NavLink
                            to="/create"
                            icon={<IconPlus size={18} />}
                            text="Create Task"
                        />
                        <NavLink
                            to="/search"
                            icon={<IconSearch size={18} />}
                            text="Search"
                        />

                    </div>

                    <button
                        onClick={handleToggleMobileMenu}
                        className="md:hidden text-gray-500"
                    >
                        {!isMobileMenuOpen ? <IconMenu size={24} /> : <IconX size={24} />}
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
                                <NavLink
                                    to="/"
                                    icon={<IconHome size={18} />}
                                    text="Home"
                                />
                                <NavLink
                                    to="/tasks"
                                    icon={<IconList size={18} />}
                                    text="Tasks"
                                />
                                <NavLink
                                    to="/create"
                                    icon={<IconPlus size={18} />}
                                    text="Create Task"
                                />
                                <NavLink
                                    to="/search"
                                    icon={<IconSearch size={18} />}
                                    text="Search"
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}