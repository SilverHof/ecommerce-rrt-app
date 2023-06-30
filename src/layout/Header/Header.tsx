import { NavigatorLink } from '../../components/Navigator/NavigatorLink/NavigatorLink'
import { NavigatorList } from '../../components/Navigator/NavigatorList/NavigatorList'
import { Account } from './components/Account/Account'
import { Catalog } from './components/Catalog/Catalog'
import { Logo } from './components/Logo/Logo'
import { SearchForm } from './components/SearchForm/SearchForm'
import { HeaderProps } from './Header.props'
import './Header.scss'


export const Header = ({ children }: HeaderProps) => {
   return (
      <header className="header">
         <div className="header__container container">
            <div className="header__inner">
               <Logo />
               <Catalog />
               <SearchForm />
               <Account />
               {children}
            </div>
         </div>
      </header>
   )
}
