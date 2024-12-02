import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TaskProvider } from "../../../context/useTaskContext";


export const Page: React.FC = () => {
    return (
        <div
            className="min-h-screen bg-blue-50 text-blue-900 flex flex-col"
        >
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <TaskProvider>
                    <Outlet />
                </TaskProvider>
            </main>
            <footer className="bg-white shadow-md mt-8">
                <div className="container mx-auto p-4 text-center text-blue-600">
                    &copy; 2024 PlanIt. All rights reserved.
                </div>
            </footer>
        </div>
    )
}