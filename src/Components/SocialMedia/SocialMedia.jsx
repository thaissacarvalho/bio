import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function SocialMedia() {
    
    const faIcons = "w-9 h-9 hover:text-style-purple";
    
    return (
        <div className="flex justify-center items-center gap-6">
            <a href="https://github.com/thaissacarvalho" rel="noreferrer" target="_blank">
                <FaGithub className={faIcons}/>
            </a>
            <a href="https://www.linkedin.com/in/thaissacarvalho-ti/" rel="noreferrer" target="_blank">
                <FaLinkedin className={faIcons}/>
            </a>
        </div>
    )
}
