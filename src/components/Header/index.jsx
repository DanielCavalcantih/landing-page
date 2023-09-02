import { useState } from "react";
import "./style.scss";
import logo from "../../assets/SP labs_.png";

export default function Header() {
  const [colorChat, setColorChat] = useState("white");

  return (
    <header className="header">
      <div className="header__container">
        <img className="nav__image" alt="logo" src={logo} />
        <div className="nav_items">
          <span className="nav__item" style={{ marginRight: '17.5px' }}>Cases</span>
          <span className="nav__item" style={{ marginLeft: '17.5px' }}>Contato</span>
        </div>
        <div className="container__title">
          <h1 className="title__h1">
            Imagine, crie,
            <br />
            implemente e <span className="h1__span">evolua</span>
          </h1>
          <p className="title__p">
            Porque não basta resolver apenas os conflitos do mundo do direito.
          </p>
          <div>
            <button className="title__button">Inicie a sua jornada</button>
          </div>
        </div>
        <button
          className="chat__button"
          onMouseEnter={() => setColorChat("#343434")}
          onMouseLeave={() => setColorChat("white")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.5968 12.8656C18.5968 13.3723 18.3955 13.8582 18.0372 14.2164C17.6789 14.5747 17.193 14.776 16.6864 14.776H5.22408L1.40332 18.5968V3.3137C1.40332 2.80704 1.60459 2.32112 1.96286 1.96286C2.32112 1.60459 2.80704 1.40332 3.3137 1.40332H16.6864C17.193 1.40332 17.6789 1.60459 18.0372 1.96286C18.3955 2.32112 18.5968 2.80704 18.5968 3.3137V12.8656Z"
              stroke={colorChat}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
