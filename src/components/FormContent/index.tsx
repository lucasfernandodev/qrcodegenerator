import React, { ReactElement } from "react";
import Accordion from "../Accordion";
import style from "./style.module.css";
import Email from './Email';
import Text from './Text';
import Url from './Url';

type FormContentType = "text"| 'url' | 'email'

type PropsFormContent = {
  type: FormContentType
}

interface formContent {
  [key : string]: ReactElement
}
const FormContent: React.FunctionComponent<PropsFormContent> = ({type}) => {

  
  const typeFormContent:formContent = {
    text: <Text />,
    url: <Url/>,
    email: <Email />,
  }

  return (
  
    <Accordion title="Conteúdo" hide={false}>
        {console.log(typeFormContent[type])}
      <form className={style.formContent}>
        {typeof typeFormContent[type] !== 'undefined' && typeFormContent[type]}
      </form>
    </Accordion>
  );
};

export default FormContent;
