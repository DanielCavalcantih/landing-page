import { useEffect, useState } from "react";
import { getCases } from "../../services/api";
import "./style.scss";
import CardSolution from "../CardSolution";

export default function SectionSolutions() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      const response = await getCases();
      if (response) {
        setCases(response);
      }
    };
    getResponse();
  }, []);

  return (
    <section className="solutions">
      <h2 className="solutions__title">
        Problemas complexos.
        <br />
        Soluções{" "}
        <span style={{ textDecorationLine: "strikethrough" }}>
          complexas
        </span>{" "}
        <span style={{ fontStyle: "italic" }}>criativas</span>_
      </h2>
      <p className="solutions__text">
        Confira nossos cases de sucesso que vão além do mundo juridico.
      </p>
      <div className="container__cards">
        {cases.length &&
          cases.map((solution) => (
            <CardSolution key={solution.title} solution={solution} />
          ))}
      </div>
    </section>
  );
}