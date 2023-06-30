import { AboutProps } from './About.props'
import './About.scss'
import { motion } from 'framer-motion'


export const About = ({ children }: AboutProps) => {
   return (
      <motion.main 
         className="main"
      
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity:0}}
      >
         <section className="about-page">
            <div className="about-page__container container">
               <div className="about-page__inner">
                  About page
               </div>
            </div>
         </section>
      </motion.main>
   )
}
