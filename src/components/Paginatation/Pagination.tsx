import { PaginationProps } from './Pagination.props';
import './Pagination.scss'


export const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage, displayPages }: PaginationProps) => {

   // use pagintaion sheatcheet
   
   // const [currentPage, setCurrentPage] = useState<number>(1);
   // const [itemsPerPage, setItemsPerPage] = useState<number>(50);

   // const lastItemIndex = currentPage * itemsPerPage;
   // const firstItemIndex = lastItemIndex - itemsPerPage;

   // const currentItems = someData?.slice(firstItemIndex, lastItemIndex);

   // totalItems={someData.length}


   let pages: (number)[] = [];

   for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
      pages.push(index);
   }

   const previousPage = () => {
      setCurrentPage((previousState: number) => { previousState - 1 });
   }

   const nextPage = () => {
      setCurrentPage((previousState: number) => { previousState + 1 });
   }
   

   return (
      <div className="pagination">
         <button 
            className={currentPage == 1 ? `pagination__previous-button_disable` : `pagination__previous-button`}
            onClick={previousPage}
         >
            Previous
         </button>

         {  
            displayPages 
            && 
            pages.map((page, index) => (
               <button
                  key={index}
                  className={page == currentPage ? `pagination__page-button_active` : `pagination__page-button`}
                  onClick={() => setCurrentPage(page)}
               >
                  {page}
               </button>
            ))
         }

         <button 
            className={(currentPage == pages.length) ? `pagination__next-button_disable` : `pagination__next-button`}
            onClick={nextPage}
         >
            Next
         </button>
      </div>
   )
}
