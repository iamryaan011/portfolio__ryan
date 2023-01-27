//styles
import styles from "../styles/scss/About.module.scss";

export default function About() {
  return (
    <section className={styles.About} id="about">
      <h1>sobre mim</h1>

      <article>
        <p>
          Olá, me chamo{" "}
          <a
            href="https://www.instagram.com/iamryaan011/"
            target={"__blank"}
          >
            Ryan Lima
          </a>
          , sou um estudante de programação, com mais de 1 ano de experiência.
          Com minhas pesquisas, acabei chegando ao Front-End e ele se tornou o
          meu "queridinho".
        </p>

        <p>
          Gosto de trabalhos ligados à layout e design de páginas online, sendo
          mais aplicado à criação de sites. Hoje em dia eu programo
          constantemente e produzo projetos para o meu{" "}
          <a
            href="https://github.com/iamryaan011"
            target={"__blank"}
          >
            GitHub
          </a>
          .
        </p>

        <p>
          Sou uma pessoa bastante esforçada e resiliente perante a qualquer
          situação. Estou muito disposto a evoluir mais ainda e poder ajudar no
          que eu for capaz.
        </p>
      </article>
    </section>
  );
}
