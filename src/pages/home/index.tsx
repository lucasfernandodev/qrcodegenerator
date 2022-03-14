import { useEffect, useRef } from 'react';
import style from './style.module.css';

export default function App() {

  const navigationRef = useRef<null | Element>(null);

  useEffect(() => {

    const menuItens = navigationRef.current && navigationRef.current.querySelectorAll(`li`);

    function toggleTabNavigation(e: Event){
      console.log("teste")
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
        </main>
    </div>
    </>
  )
}