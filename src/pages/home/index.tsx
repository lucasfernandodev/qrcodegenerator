import { useEffect, useRef } from 'react';
import Accordion from '../../components/Accordion';
import FormContent from '../../components/FormContent';
import FormDesign from '../../components/FormDesign';
import style from './style.module.css';

export default function App() {

  const navigationRef = useRef<null | HTMLElement>(null);

  useEffect(() => {

    const menuItens = navigationRef.current && navigationRef.current.querySelectorAll(`li`);

    function toggleTabNavigation(e: Event){

      const element: Element = e.target as Element;

      menuItens && menuItens.forEach(element => element.classList.remove(style.active));
      element.classList.add(style.active);

    }

    
    menuItens && menuItens.forEach(element => {
      element.addEventListener("click", e => toggleTabNavigation(e))
    })
  }, [])
  return (
    <>
    <header className={style.header}>
      <h1>.Gerar QRCODE</h1>
      <a href="/">Ver no github</a>
    </header>
    <div className={style.content}>
      <main className={style.main}>
        <nav className={style.navigation} ref={navigationRef}>
          <ul className={style.menu}>
            <li className={style.active}>Texto</li>
            <li>Url</li>
            <li>E-mail</li>
          </ul>
        </nav>
        <FormContent />
        <Accordion title='Fazer upload de logo'>
          <form className={style.formUpload}>
            <div className="Image"></div>
            <button>Selecionar imagem</button>
          </form>
        </Accordion>
        <FormDesign />
        <Accordion title='Editar Cores'></Accordion>
      </main>

    <aside className={style.aside}>
      <img src="/public/images/qrcode.svg" alt="QRCODE" />
      <button>Gerar QR code</button>
    </aside>
    </div>
    </>
  )
}