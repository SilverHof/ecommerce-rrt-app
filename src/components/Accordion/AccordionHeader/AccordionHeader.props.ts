export interface AccordionHeaderProps {
   children?: React.ReactNode,
   isIcon?: boolean,
   icon?: React.ReactNode,
   isText: boolean
   text?: string,

   isButtonMoreIcon: boolean,
   buttonMoreIcon?: React.ReactNode,
   isButtonMoreText: boolean,
   buttonMoreText?: string,

   isButtonLessIcon: boolean,
   buttonLessIcon?: React.ReactNode,
   isButtonLessText: boolean,
   buttonLessText?: string,
}