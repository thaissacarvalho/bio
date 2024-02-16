import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function SocialMedia() {
    
    const faIcons = "w-9 h-9";
    
    return (
        <div className="flex justify-center items-center gap-6">
            <a href="">
                <FaGithub className={faIcons}/>
            </a>
            <a href="">
                <FaLinkedin className={faIcons}/>
            </a>
        </div>
    )
}
