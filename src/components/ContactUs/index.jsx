import { useState } from "react";
import "./style.scss";
import { sendContact } from "../../services/api";
import ModalMessage from "../ModalMessage";

export default function ContactUs() {
  const [personInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    segment: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [politic, setPolitic] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await sendContact(personInfo);
    if (response.status === 200) {
      setMessage(response.data);
      setOpenModal(!openModal);
      setPersonInfo({ name: "", email: "", segment: "", description: "" });
      setPolitic(false);
    } else setMessage("Ocorreu um erro ao enviar a mensagem!");
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setPersonInfo({ ...personInfo, [name]: value });
  };

  return (
    <section className="contact">
      <h2 className="contact__title">Não fique parado, fale conosco</h2>
      <form className="contact__form" onSubmit={handleClick}>
        <input
          type="text"
          name="name"
          className="form__input"
          value={personInfo.name}
          onChange={handleChange}
          placeholder="Seu nome"
          required
        />
        <input
          type="email"
          name="email"
          value={personInfo.email}
          onChange={handleChange}
          className="form__input"
          placeholder="Seu email"
        />
        <select
          style={{ width: "358px", cursor: "pointer" }}
          name="segment"
          onChange={handleChange}
          value={personInfo.segment}
          className="form__input"
          placeholder="Seu segmento"
        >
          <option value="">Seu segmento</option>
          <option value="Segmento 1">Segmento 1</option>
          <option value="Segmento 2">Segmento 2</option>
          <option value="Segmento 3">Segmento 3</option>
        </select>
        <textarea
          onChange={handleChange}
          name="description"
          value={personInfo.description}
          placeholder="Fale um pouco sobre seu negócio"
          className="form__input"
        />
        <input
          type="checkbox"
          id="politic"
          className="form__check"
          checked={politic}
          onChange={(e) => setPolitic(e.target.checked)}
        />
        <label htmlFor="politic" className="label__text">
          Declaro que conheço a Política de Privacidade e autorizo a utilização
          das minhas informações pelo SP Labs
        </label>
        <button className="form__button" type="submit">
          Enviar
        </button>
      </form>
      <ModalMessage
        message={message}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </section>
  );
}
