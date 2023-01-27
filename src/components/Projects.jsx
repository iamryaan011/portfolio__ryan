//styles
import styles from "../styles/scss/Projects.module.scss";

export default function Projects() {
  return (
    <section className={styles.Projects} id="projects">
      <h1>projetos</h1>

      <section>
        <article>
          <span>em breve</span>
        </article>

        <article>
          <span>em breve</span>
        </article>

        <article>
          <span>em breve</span>
        </article>
      </section>

      <a
        href="https://github.com/iamryaan011?tab=repositories"
        target={"__blank"}
      >
        Ver repositórios.
      </a>
    </section>
  );
}
