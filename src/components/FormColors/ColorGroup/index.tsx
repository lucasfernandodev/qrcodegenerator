import { useEffect, useState } from "react";

type mapUniqueInputType = {
  type: string;
  order: string;
  defaultValue: string;
  title: string;
  id: string;
};

interface colorsInterface {
  [key: string]: {
    [key: string]: string;
  };
}

type colorGroupType = {
  color: colorsInterface,
  data: mapUniqueInputType,
  onChange: (e: any) => void
}

const ColorGroup: React.FunctionComponent<colorGroupType> = ({color , data, onChange}) => {

  const [colors, setColors] = useState<colorsInterface>(color);
  const [colorCurrent, setColorCurrent] = useState<string>('');

  useEffect(() => {
    if(color !== colors){
      setColors(color)
    }

    colors[data.type].colorDefault
  }, [colorCurrent])


  return (
    <>
      <fieldset>
        <input
          data-type={data.type}
          data-order={data.order}
          type="color"
          name={data.id}
          id={data.id}
          defaultValue={color && data.order === "default"
          ? color[data.type].colorDefault
          : color[data.type].color}
          onChange={(e) => {
            onChange(e)
            setColorCurrent(e.target.value)
          }}
        />
        <label htmlFor={data.id}>
          {colors && data.order === "default"
            ? colors[data.type].colorDefault
            : colors[data.type].color}
        </label>
      </fieldset>

      <span>{data.title}</span>
    </>
  );
};

export default ColorGroup;