import { HomeProps } from './Home.props'
import './Home.scss'
import { motion } from 'framer-motion'


export const Home = ({ children }: HomeProps) => {

   return (
      <motion.main 
         className="main"         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity:0}}
      >
         <section className="home-page">
            <div className="home-page__container container">
               <div className="home-page__inner">
                  Home page
               </div>
            </div>
         </section>
      </motion.main>
   )
}
