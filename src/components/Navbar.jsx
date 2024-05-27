import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="jb-10 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <h2 className="mx-2 w-10 text-3xl font-semibold text-slate-300" ><a href="#" target="_blank" rel="noopener noreferrer">Ro</a></h2>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl text-slate-300">
      <a href="https://www.linkedin.com/in/rohan-kumar-73532a240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>
      <a href="https://github.com/RohanKP1"><FaGithub/></a>
      <a href="https://www.instagram.com/rohan_prajapati06?igsh=b2p0NWt2b3QyNDM="><FaInstagram/></a>
    </div>
  </nav>
};

export default Navbar