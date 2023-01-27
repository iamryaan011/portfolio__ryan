//styles
import styles from "../styles/scss/Header.module.scss";

//react components
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState("flex");

  const handleOpenMenu = () => {
    if (menu === "none") {
      setMenu("flex");
    } else {
      setMenu("none");
    }
  };

  return (
    <header className={styles.Header}>
      <div>
        <h1>portfólio</h1>
      </div>

      <nav>
        <article onClick={handleOpenMenu}>
          <div id={styles.first_div}></div>
          <div id={styles.second_div}></div>
          <div id={styles.third_div}></div>
        </article>
        
        <ul style={{ display: menu }}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
