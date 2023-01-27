//styles
import styles from "../styles/scss/Footer.module.scss";

//next
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <section>
        <article>
          <a href="https://github.com/iamryaan011" target={"__blank"}>
            <Image
              src={"/assets/images/github.png"}
              width={33}
              height={33}
              alt={"github logo"}
            />
          </a>
        </article>

        <article>
          <a href="https://www.instagram.com/iamryaan011/" target={"__blank"}>
            <Image
              src={"/assets/images/instagram.png"}
              width={30}
              height={30}
              alt={"instagram logo"}
            />
          </a>
        </article>

        <article>
          <a href="https://www.linkedin.com/in/ryanlima011/" target={"__blank"}>
            <Image
              src={"/assets/images/linkedin.png"}
              width={30}
              height={30}
              alt={"linkedin logo"}
            />
          </a>
        </article>
      </section>
      © 2023 ryan lima
    </footer>
  );
}
