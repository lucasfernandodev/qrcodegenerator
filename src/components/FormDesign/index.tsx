import { useEffect, useRef, useState } from "react";
import Accordion from "../Accordion";
import style from "./style.module.css";

function generateImagesPath(name: string, length: number, type: string, category: string){
  const BASE = '/public/images/';
  const paths = [];

  for(let i = 0; i < length;  i++){
    
    const currentPath = `${BASE}${category}/${name}${i}.${type}`;
    paths.push(currentPath);
  }

  return paths;

}

interface selectImageGroupInterface {
  [Key: string] : string[]
}

const FormDesign = () => {

  const ImageBodyPaths: string[] = generateImagesPath("frame", 22, "png", "body");
  const ImageEyesPaths: string[] = generateImagesPath("frame", 15, "png", "eye");
  const ImageEyesBallPaths: string[] = generateImagesPath("ball", 18, "png", "eyeBall");

  const selectImageGroup: selectImageGroupInterface = {
    body : ImageBodyPaths,
    eye: ImageEyesPaths,
    eyeBall: ImageEyesBallPaths,
  }

  const [images, setImages] = useState<string>("body");
  const tabRef = useRef<HTMLFieldSetElement | null>(null);


  useEffect(() => {
    const tabOption = tabRef.current && tabRef.current.querySelectorAll("input");

    if(tabOption){
      tabOption[0].checked = true;
    }

  }, [])

  return (
    <Accordion title="Editar design">
      <form className={style.formDesign}>
        <fieldset ref={tabRef}>
          <div>
            <input type="radio" name="changeDesign" value="body" id="body" onChange={e => setImages(e.target.value)}/>
            <label htmlFor="body">Estilo de pixel</label>
          </div>

          <div>
            <input
              type="radio"
              name="changeDesign"
              id="tabInterno"
              value="eyeBall"
              onChange={e => setImages(e.target.value)}
            />
            <label htmlFor="tabInterno">Estilo do quadro interno</label>
          </div>

          <div>
            <input
              type="radio"
              name="changeDesign"
              id="tabExterno"
              value="eye"
              onChange={e => setImages(e.target.value)}
            />
            <label htmlFor="tabExterno">Estilo do quadro externo</label>
          </div>
        </fieldset>
        <fieldset className={style.groupImages}>
        {/* {imageNamesArray.map(name => 
          <img src={`/public/images/body/${name}.png`} alt={name} />
        )} */}

       {selectImageGroup[images] && selectImageGroup[images].map(path => 
          <img src={path} alt={path} />
        )}
        </fieldset>
      </form>
    </Accordion>
  );
};

export default FormDesign;
