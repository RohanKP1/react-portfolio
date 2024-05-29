import { RiReactjsLine } from "react-icons/ri"
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si"
import { FcLinux } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { motion } from "framer-motion"

const iconVariations = (duration) => ({
    initial: {y:-7},
    animate: {
        y: [7, -7],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl text-slate-300">
            Technologies
        </motion.h2>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariations(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariations(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div
            variants={iconVariations(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariations(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcLinux className="text-7xl"/>
            </motion.div>
            <motion.div 
            variants={iconVariations(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-purple-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariations(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGnubash className="text-7xl"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies