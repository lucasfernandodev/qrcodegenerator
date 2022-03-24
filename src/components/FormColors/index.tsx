import { useRef, useState } from "react";
import Accordion from "../Accordion";
import style from "./style.module.css";
import ColorGroup from "./ColorGroup";

interface colorsInterface {
  [key: string]: {
    [key: string]: string;
  };
}

type mapUniqueInputType = {
  type: string;
  order: string;
  defaultValue: string;
  title: string;
  id: string;
  value?: colorsInterface;
};

type degradeType = mapUniqueInputType[] | mapUniqueInputType;

interface contentColorsInterface {
  unique: mapUniqueInputType[];
  degrade: degradeType[];
}

const colors: colorsInterface = {
  frame: {
    colorDefault: "#5555dd",
    color: "#5da5ef",
  },
  eye: {
    colorDefault: "#5555dd",
    color: "#3244ff",
  },
  bg: {
    colorDefault: "#ffffff",
  },
};

const mapInputsUnique: mapUniqueInputType[] = [
  {
    type: "frame",
    order: "default",
    id: "uniqueFrameColor",
    defaultValue: "#5555ff",
    title: "Cor principal",
  },
  {
    type: "eye",
    order: "default",
    id: "uniqueEyeColor",
    defaultValue: "#5d0dff",
    title: "Cor do quadro",
  },
  {
    type: "bg",
    order: "default",
    id: "uniqueBGColor",
    defaultValue: "#ffffff",
    title: "Cor de fundo",
  },
];

const mapInputsDegrade: degradeType[] = [
  [
    {
      type: "frame",
      order: "default",
      id: "degradeFrameColorDefault",
      defaultValue: "#5555ff",
      title: "Cor principal",
    },
    {
      type: "frame",
      order: "color",
      id: "degradeFrameColor",
      defaultValue: "#aa55ff",
      title: "Cor principal",
    },
  ],
  [
    {
      type: "eye",
      order: "default",
      id: "degradeEyeColorDefault",
      defaultValue: "#5d0dff",
      title: "Cor do quadro",
    },
    {
      type: "eye",
      order: "color",
      id: "degradeEyeColor",
      defaultValue: "#9d0dff",
      title: "Cor do quadro",
    },
  ],
  {
    type: "bg",
    order: "default",
    id: "uniqueBGColor",
    defaultValue: "#ffffff",
    title: "Cor de fundo",
  },
];

type typeCurrent = "unique" | "degrade";

const FormColors = () => {
  const [tabCurrent, setTabCurrent] = useState<typeCurrent>("unique");
  const [colorCurrent, setColorCurrent] = useState<colorsInterface>(colors);

  const colorRef = useRef<HTMLInputElement | null>(null);
  const contentColors: contentColorsInterface = {
    unique: mapInputsUnique,
    degrade: mapInputsDegrade,
  };

  function setColors(e: React.ChangeEvent<HTMLInputElement>) {
    const colorType = e.currentTarget.dataset.type;
    const colorOrder = e.currentTarget.dataset.order;
    const color = e.currentTarget.value;

    const newColors = colors;

    if (!colorType || typeof colorOrder === "undefined" || color.length !== 7)
      return;

    if (colorOrder === "default") {
      newColors[colorType]["colorDefault"] = color;
    } else {
      newColors[colorType]["color"] = color;
    }
    setColorCurrent(newColors);
  }

  return (
    <Accordion title="Editar Cores">
      {console.log(colorCurrent)}
      <div className={style.formColors}>
        <nav className={style.select}>
          <fieldset>
            <input
              defaultChecked={true}
              type="radio"
              name="tabColor"
              id="OptionUnique"
              onClick={() => setTabCurrent("unique")}
            />
            <label htmlFor="OptionUnique">Cor unica</label>
          </fieldset>

          <fieldset>
            <input
              type="radio"
              name="tabColor"
              id="optionDegrade"
              onClick={() => setTabCurrent("degrade")}
            />
            <label htmlFor="optionDegrade">Usar degradê</label>
          </fieldset>
        </nav>
        <div ref={colorRef}>
          <div className={style.content}>
            {contentColors[tabCurrent].map((item: any, index) => {
              if (typeof item.type !== "undefined") {
                return (
                  <div className={style.colorGroup} key={index}>
                    <ColorGroup
                      color={colorCurrent}
                      data={item}
                      key={index}
                      onChange={setColors}
                    />
                  </div>
                );
              }

              if (typeof item.type === "undefined") {
                return (
                  <div className={style.colorGroup} key={index}>
                    {item.map((input: any) => (
                      <ColorGroup
                        color={colorCurrent}
                        data={input}
                        key={input.id}
                        onChange={setColors}
                      />
                    ))}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default FormColors;
