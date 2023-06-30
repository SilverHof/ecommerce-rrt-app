import { ContactsProps } from './Contacts.props'
import './Contacts.scss'
import { motion } from 'framer-motion'


export const Contacts = ({ children }: ContactsProps) => {
   return (
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity:0}}
      >
         <section className="contacts-page">
            <div className="contacts-page__container container">
               <div className="contacts-page__inner">
                  Contacts page
               </div>
            </div>
         </section>
      </motion.main>
   )
}
