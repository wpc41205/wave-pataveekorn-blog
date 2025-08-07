import { FaGoogle,FaGithub,FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="flex items-center justify-between h-[144px] py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto bg-[#EFEEEB] border-b border-[#DAD6D1]">
            {/* Left side - Get in touch section */}
            <div className="flex items-center space-x-4">
                <span className="text-[#26231E] font-medium">Get in touch</span>
                <div className="flex space-x-3">
                    {/* LinkedIn Icon */}
                    <a href="#" className="text-[#26231E] hover:text-blue-600 transition-colors">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    {/* GitHub Icon */}
                    <a href="#" className="text-[#26231E] hover:text-gray-900 transition-colors">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    {/* Google Icon */}
                    <a href="#" className="text-[#26231E] hover:text-red-600 transition-colors">
                        <FaGoogle className="w-5 h-5" />
                    </a>
                </div>
            </div>
            
            {/* Right side - Home page link */}
            <div>
                <a href="#" className="text-[#26231E] font-bold hover:text-gray-900 underline transition-colors">
                    Home page
                </a>
            </div>
        </footer>
    )
}

