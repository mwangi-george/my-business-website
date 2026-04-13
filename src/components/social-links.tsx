import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className=" flex items-center justify-center gap-4">
            <a
                href="https://github.com/mwangi-george"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow-md"
            >
                <FaGithub className="h-4 w-4" />
                <span>GitHub</span>
            </a>

            <a
                href="https://linkedin.com/in/mwangi-george"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow-md"
            >
                <FaLinkedin className="h-4 w-4" />
                <span>LinkedIn</span>
            </a>
        </div>
    );
};

export default SocialLinks;
