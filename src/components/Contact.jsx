//styles
import styles from "../styles/scss/Contact.module.scss";

//react
import { useState } from "react";

//emailjs
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSendEmail(e) {
    e.preventDefault();

    const params = {
      from_name: name,
      email: email,
      message: message
    };

    emailjs.send(
      "service_6wtzfwf",
      "template_ud7pwlu",
      params,
      "p6W1jGXyn5pvHG_ag"
    ).then((response) => console.log("E-mail enviado!"));

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className={styles.Contact} id="contact">
      <article>
        <h1>entre em contato</h1>

        <form onSubmit={handleSendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="text"
            name="email"
            placeholder="Endereço de E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            name="message"
            id="textarea"
            placeholder="Escreva sua mensagem aqui"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <button type="submit">Enviar</button>
        </form>
      </article>
    </section>
  );
}
