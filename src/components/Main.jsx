//styles
import styles from "../styles/scss/Main.module.scss";

//components
import Header from "./Header";

//icons
import { download } from "../icons/icons";

export default function Main() {
  return (
    <main className={styles.Main} id="home">
      <Header />

      <section>
        <article>
          <h1>precisa de ajuda?</h1>

          <p>
            Sou um programador Front-End Júnior e Web Designer. Tem algum problema
            envolvendo uma dessas profissões? Deixa comigo!
          </p>
        </article>

        <a href="/assets/documents/CV_PORTUGUES.pdf" download>
          <button>{download} Download CV</button>
        </a>
      </section>
    </main>
  );
}
