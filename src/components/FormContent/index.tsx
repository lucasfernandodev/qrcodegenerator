import Accordion from "../Accordion";
import style from "./style.module.css";
import Email from './Email';
import Text from './Text';
import Url from './Url';


type PropsFormContent = {
  type: "text"| 'url' | 'email'
}

const FormContent: React.FunctionComponent<PropsFormContent> = ({type}) => {

  interface formContent {
    [key : string]: React.ReactNode
  }

  const typeFormContent:formContent = {
    text: <Text />,
    url: <Url/>,
    email: <Email />,
  }

  return (
  
    <Accordion title="Conteúdo" open={true} hideIcon={true}>
      <form className={style.formContent}>
        {typeof typeFormContent[type] !== 'undefined' && typeFormContent[type]}
      </form>
    </Accordion>
  );
};

export default FormContent;
