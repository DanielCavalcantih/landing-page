import "./style.scss";

export default function CardSolution({ solution }) {
  const { title, description, link } = solution;
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
      <a className="card__link" href={link}>
        <span className="link__text">Saiba mais</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12H19"
            stroke="#343434"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="#343434"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
