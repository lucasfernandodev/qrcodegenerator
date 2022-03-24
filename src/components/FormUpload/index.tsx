import style from './style.module.css';
import Accordion from "../Accordion";

const FormUpload = () => {
  return (
    <Accordion title='Fazer upload de logo'>
    <form className={style.formUpload}>
      <div className="Image"></div>
      <button>Selecionar imagem</button>
    </form>
  </Accordion>
  )
};

export default FormUpload;