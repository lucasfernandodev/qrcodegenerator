import Accordion from "../Accordion";
import style from "./style.module.css";

const FormDesign = () => {
  const imageNamesArray = [
    "square", "mosaic", "dot", "circle", "circle-zebra", "circle-zebra-vertical",
    "circular", "edge-cut", "edge-cut-smooth","japnese","leaf","pointed",
    "pointed-edge-cut","pointed-in","pointed-in-smooth","pointed-smooth","round",
    "rounded-in","rounded-in-smooth","rounded-pointed","star","diamond"
  ]
  return (
    <Accordion title="Editar design">
      <form className={style.formDesign}>
        <fieldset>
          <div>
            <input type="radio" name="changeDesign" value="tabMain" id="tabMain"/>
            <label htmlFor="tabMain">Estilo de pixel</label>
          </div>

          <div>
            <input
              type="radio"
              name="changeDesign"
              id="tabInterno"
              value="tabInterno"
            />
            <label htmlFor="tabInterno">Estilo do quadro interno</label>
          </div>

          <div>
            <input
              type="radio"
              name="changeDesign"
              id="tabExterno"
              value="tabExterno"
            />
            <label htmlFor="tabExterno">Estilo do quadro externo</label>
          </div>
        </fieldset>
        <fieldset className={style.groupImages}>
        {imageNamesArray.map(name => 
          <img src={`/public/images/body/${name}.png`} alt={name} />
        )}
        </fieldset>
      </form>
    </Accordion>
  );
};

export default FormDesign;
