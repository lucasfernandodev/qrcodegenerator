import { useEffect, useRef, useState } from "react";
import IconPen from "../../utils/IconPen";
import style from "./style.module.css";


type Props = {
  title: string;
  hideIcon?: boolean
  open?: boolean;
};

const Accordion: React.FunctionComponent<Props> = ({
  title,
  children,
  open = false,
  hideIcon = false,
}) => {

  const dRef = useRef<HTMLDetailsElement | null>(null)
  const [openShow, setOpenShow] = useState<boolean>(false)

  useEffect(() => {
    openShow !== open && setOpenShow(open)
  }, [])


  function ontChange(e: any){

    console.log('casa ')

    const el = e.target as HTMLDetailsElement;
        const currentOpen = openShow;
        const openAttr =el.getAttribute('open');
      
        // openAttr && setOpenShow(openAttr)
  }

  return (
    <details onChange={e => ontChange(e)} className={style.Accordion} open={open}>
      <summary onClick={() => setOpenShow(!openShow)}>
        {title}
        <button>
          {hideIcon === false && <IconPen  stroke="#343449" hide={!openShow}/>}
        </button>
      </summary>
      <div>{children && children}</div>
    </details>
  );
};

export default Accordion;
