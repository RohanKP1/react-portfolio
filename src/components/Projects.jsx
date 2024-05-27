import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl text-slate-300">
            Projects
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <img src={project.image} width={150} height={150} className="mb-6 rounded-lg border-2 border-slate-700" alt={project.title}/>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>  
                        <p className="mb-4 text-neutral-400">{project.description}</p>  
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                {tech}
                            </span>
                        ))}
                    </motion.div>    
                </div>
            ))}
        </div>
        <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <a href="https://github.com/RohanKP1?tab=repositories">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-300 via-slate-500 to-purple-500 group-hover:from-pink-300 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-purple-500 animate-text">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                More Projects
                </span>
                </button>
            </a>
        </div>
    </div>
  )
}

export default Projects