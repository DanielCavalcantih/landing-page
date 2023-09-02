import "./style.scss";
import logo from "../../assets/SP labs_.png";
import background from "../../assets/header-image.png";

export default function Header() {

  return (
    <header className="header">
      <div><img src={background} alt="" className="header__background" /></div>
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
      </div>
    </header>
  );
}
