import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Contacts } from '../pages/Contacts/Contacts';
import { NotFound } from '../pages/NotFound/NotFound';
import { AnimatePresence } from 'framer-motion';
import { SmartPhones } from '../pages/SmartPhones/SmartPhones';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';


export const AnimatedRoutes = () => {

   const location = useLocation();

   return (
      <AnimatePresence>
         <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Layout />}> 
               <Route index element={<Home />} />
               <Route path="smart-phones" element={<SmartPhones />} />
               <Route path="about" element={<About />} />
               <Route path="contacts" element={<Contacts />} />
               <Route path="*" element={<NotFound />} />

               <Route path=':productId' element={<ProductDetails />} />
            </Route>
            
         </Routes>
      </AnimatePresence>
   )
}
