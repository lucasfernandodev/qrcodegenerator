import { useEffect, useRef, useState } from "react";
import Accordion from "../Accordion";
import style from "./style.module.css";

function generateImagesPath(names: string[], type: string, category: string){
  const BASE = '/public/images/';

  const paths = [];

  for(let i = 0; i < names.length;  i++){
    
    const currentPath = `${BASE}${category}/${names[i]}.${type}`;
    paths.push({currentPath: currentPath, name: names[i], currentCategory: category});
  }

  return paths;

}

interface selectImageGroupInterface {
  [Key: string] : pathsInterface[]
}

interface pathsInterface {
  currentPath: string,
  name: string,
  currentCategory: string
}
const FormDesign = () => {

  const bodyId = [
    'square',
    'mosaic',
    'dot',
    'circle',
    'circle-zebra',
    'circle-zebra-vertical',
    'circular',
    'edge-cut',
    'edge-cut-smooth',
    'japnese',
    'leaf',
    'pointed',
    'pointed-edge-cut',
    'pointed-in',
    'pointed-in-smooth',
    'pointed-smooth',
    'round',
    'rounded-in',
    'rounded-in-smooth',
    'rounded-pointed',
    'star',
    'diamond'
  ]
  const eyeId = [
    'frame0',
    'frame1',
    'frame2',
    'frame3',
    'frame4',
    'frame5',
    'frame6',
    'frame7',
    'frame8',
    'frame10',
    'frame11',
    'frame12',
    'frame13',
    'frame14',
    'frame16',
  ]
  const eyeBallsId = [
    'ball0',
    'ball1',
    'ball2',
    'ball3',
    'ball5',
    'ball6',
    'ball7',
    'ball8',
    'ball10',
    'ball11',
    'ball12',
    'ball13',
    'ball14',
    'ball15',
    'ball16',
    'ball17',
    'ball18',
    'ball19',
  ]

  const selectImageGroup: selectImageGroupInterface = {
    body : generateImagesPath(bodyId, "png", "body"),
    eye: generateImagesPath(eyeId, "png", "eye"),
    eyeBall: generateImagesPath(eyeBallsId, "png", "eyeBall"),
  }

  const [images, setImages] = useState<string>("body");
  const tabRef = useRef<HTMLFieldSetElement | null>(null);

  interface currentDesignSelectedInterface {
    [key : string]: string
  }

  const defaultDesignSelected = {
    body: 'default',
    eye: 'default',
    eyeBall: 'default'
  }

  const [currentsDesignSelected, setCurrentsDesignSelected] = useState<currentDesignSelectedInterface>(defaultDesignSelected)

  useEffect(() => {
    const tabOption = tabRef.current && tabRef.current.querySelectorAll("input");

    if(tabOption){
      tabOption[0].checked = true;
    }

  }, [])

  useEffect(() => {
    const allImages:NodeListOf<HTMLElement> = document.querySelectorAll('img');

    allImages.forEach(element => {
      element.onclick = () => {

        const id = element.dataset.id;
        const category = element.dataset.type;

        if(element.classList.contains(style.active)){
          element.classList.remove(style.active)
        }else{

          allImages.forEach(el => el.classList.remove(style.active))
          element.classList.toggle(style.active)
        }

        const currentDesignSelected: currentDesignSelectedInterface = currentsDesignSelected;

        if(typeof id !== 'undefined' && typeof category !== 'undefined'){
          currentDesignSelected[category] = id;

          setCurrentsDesignSelected(currentDesignSelected) 
        }
      }
    })
  }, [images])
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
       {selectImageGroup[images] && selectImageGroup[images]
        .map(item => 
          <img 
            src={item.currentPath} 
            alt={item.name} 
            key={item.name} 
            data-id={item.name}
            data-type={item.currentCategory}
            className={currentsDesignSelected[item.currentCategory] === item.name ? style.active : style.img}
          />
        )}
        </fieldset>
      </form>
    </Accordion>
  );
};

export default FormDesign;
