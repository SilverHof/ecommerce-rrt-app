import { Download } from './components/Download/Download'
import { Info } from './components/Info/Info'
import { SocialMedia } from './components/SocialMedia/SocialMedia'
import { FooterProps } from './Footer.props'
import './Footer.scss'


export const Footer = ({ children }: FooterProps) => {
   return (
      <footer className="footer">
         <div className="footer__container container">
            <div className="footer__inner">
               <Download />
               <Info />
               <SocialMedia />
               {children}
            </div>
         </div>
      </footer>
   )
}
