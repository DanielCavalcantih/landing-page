import "./style.scss";
import logo from "../../assets/SP labs_ black.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <img width="63" height="46" src={logo} alt="" />
        </div>
        <div className="content__brands">
          <div className="brand">
            <p className="footer__subtitle">SP Labs</p>
            <a className="footer__links" href="/">
              Política de Privacidade
            </a>
          </div>
          <div>
            <p className="footer__subtitle">Sem Processo</p>
            <div className="container__links">
              <a
                className="footer__links"
                target="_blank"
                href="https://www.semprocesso.com.br/"
                rel="noreferrer"
              >
                Site
              </a>
              <a
                className="footer__links"
                target="_blank"
                href="https://comacordo.com.br/"
                rel="noreferrer"
              >
                Produtos
              </a>
              <a
                className="footer__links"
                target="_blank"
                href="https://www.semprocesso.com.br/blog"
                rel="noreferrer"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div>
        <p className="footer__powered">
          SP Labs 2023. Feito por{" "}
          <a href="https://github.com/DanielCavalcantih">Daniel Cavalcanti</a>
        </p>
      </div>
    </footer>
  );
}
