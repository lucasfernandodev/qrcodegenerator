import { useEffect, useRef, useState } from "react";
import Accordion from "../../components/Accordion";
import FormColors from "../../components/FormColors";
import FormContent from "../../components/FormContent";
import FormDesign from "../../components/FormDesign";
import FormUpload from "../../components/FormUpload";
import Header from "../../components/Header";
import style from "./style.module.css";

type PropsFormContent =  "text"| 'url' | 'email'

export default function App() {
  const navigationRef = useRef<null | HTMLElement>(null);
  const [typeContent, setTypeContent] = useState<PropsFormContent>('text')

  useEffect(() => {

    const menuItens =
      navigationRef.current && navigationRef.current.querySelectorAll(`li`);

    function toggleTabNavigation(e: Event) {
      const element: HTMLElement = e.target as HTMLElement;
      const type = element.dataset.type as PropsFormContent;

      typeof type !== 'undefined' && setTypeContent(type)

      menuItens &&
        menuItens.forEach((element) => element.classList.remove(style.active));
      element.classList.add(style.active);
    }

    menuItens &&
      menuItens.forEach((element) => {
        element.addEventListener("click", (e) => toggleTabNavigation(e));
      });

      // const optionDataType = document.querySelectorAll('[data-type]');
      // optionDataType.forEach(option => option.onclick = setTypeContent(option.dataset.type))
  }, []);


  return (
    <>
      <Header />
      <div className={style.content}>
        <main className={style.main}>
          <nav className={style.navigation} ref={navigationRef}>
            <ul className={style.menu}>
              <li data-type="text" className={style.active}>Texto</li>
              <li data-type="url">Url</li>
              <li data-type="email">E-mail</li>
            </ul>
          </nav>
          <FormContent type={typeContent} />
          <FormUpload />
          <FormDesign />
          <FormColors />
        </main>

        <aside className={style.aside}>
          <img src="/public/images/qrcode.svg" alt="QRCODE" />
          <button>Gerar QR code</button>
        </aside>
      </div>
    </>
  );
}
