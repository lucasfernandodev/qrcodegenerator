import Accordion from "../Accordion";
import style from "./style.module.css";

const FormContent = () => {
  return (
    <Accordion title="Conteúdo">
      <form className={style.formContent}>
        <label htmlFor="contentText">Digite seu Texto</label>
        <textarea
          name="contentText"
          id="contentText"
          cols={30}
          rows={10}
          placeholder="Seu texto..."
        ></textarea>
      </form>
    </Accordion>
  );
};

export default FormContent;
