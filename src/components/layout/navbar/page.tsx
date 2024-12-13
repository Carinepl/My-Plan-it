import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TaskProvider } from "../../../context/useTaskContext";
import { Toaster } from "sonner";

export const Page: React.FC = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-300 flex flex-col"
        >
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <TaskProvider>
                    <Outlet />
                    <Toaster richColors />
                </TaskProvider>
            </main>
            <footer className="bg-white shadow-md mt-7">
                <div className="container mx-auto p-4 text-center text-purple">
                    &copy; 2024 PlanIt. All rights reserved.
                </div>
            </footer>
        </div>
    )
    
}