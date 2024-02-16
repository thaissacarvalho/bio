import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function SocialMedia() {
    
    const faIcons = "w-9 h-9";
    
    return (
        <div className="flex justify-center items-center gap-6">
            <a href="https://github.com/thaissacarvalho">
                <FaGithub className={faIcons}/>
            </a>
            <a href="https://www.linkedin.com/in/thaissa-carvalho-dev/">
                <FaLinkedin className={faIcons}/>
            </a>
        </div>
    )
}
