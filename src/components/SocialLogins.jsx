import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogins = () => {
    return (
        <div className="space-y-2">
            <h2 className="text-lg font-bold">login With</h2>
            <div className="flex flex-col space-y-2">
            <button className="btn"><FaGoogle /> Login with Google</button>
            <button className="btn"> <FaGithub/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogins;