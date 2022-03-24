import { useRef } from "react";
import style from "./style.module.css";


type Props = {
  title: string;
  hide?: boolean;
};

const Accordion: React.FunctionComponent<Props> = ({
  title,
  children,
  hide = true,
}) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  function toggleIcon() {
    if (imageRef.current) {
      if (imageRef.current.getAttribute("src") === "/public/icon/more.svg") {
        imageRef.current.setAttribute("src", "/public/icon/minus.svg");
      } else {
        imageRef.current.setAttribute("src", "/public/icon/more.svg");
      }
    }
  }

  return (
    <details className={style.Accordion} open={hide === false ? true : false}>
      <summary onClick={toggleIcon}>
        {title}
        <button onClick={toggleIcon}>
          <img
            src="/public/icon/more.svg"
            alt="Ver conteúdo"
            ref={imageRef}
          ></img>
        </button>
      </summary>
      <div>{children && children}</div>
    </details>
  );
};

export default Accordion;
