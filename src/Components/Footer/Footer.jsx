import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-lg font-semibold">Shreyas M</p>
                    <p className="text-sm">Full Stack Developer | Bengaluru, India</p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a
                        href="https://linkedin.com/in/shreyas-m-8854941ab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Shreyas-Chinnu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:mshreyas336@gmail.com"
                        className="hover:text-red-400 transition duration-300"
                    >
                        Email
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Shreyas M | All rights reserved | Made with ❤️ and Passion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
