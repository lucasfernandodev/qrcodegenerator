import style from './style.module.css';
import Accordion from "../Accordion";
import { useState } from 'react';

const FormUpload = () => {
  const [image, setImage] = useState<string | null>(null);
  const [hideText, setHideText] =useState<boolean>(false)

  function loadImage(event: any){
    const file = event.files[0];
    setImage(URL.createObjectURL(file))
    setHideText(true)
  }

  function resetImage(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();
    setHideText(false)
    setImage(null)
  }

  const classes = `${style.image} ${hideText === true && style.hide}`;

  return (
    <Accordion title='Fazer upload de logo'>
    <form className={style.formUpload}>
      <div className={classes}>
        {
          image !== null && <img src={image} alt="Logo"/>
        }
      </div>
      <div className={style.group} >
      <label htmlFor="contentId">Upload do arquivo</label>
      <button onClick={e => resetImage(e)}>Remover Logo</button>
      <input id="contentId"type="file" placeholder='Selecionar imagem' onChange={(e) => loadImage(e.target)}/>
      </div>
    </form>
  </Accordion>
  )
};

export default FormUpload;