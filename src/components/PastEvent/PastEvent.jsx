import React from "react";
import { Link } from "react-router-dom";
import "./PastEvent.css";

import { Tooltip } from "react-tooltip";

// importar a função lá do arquivo stringFunction (destructuring)
import { dateFormatDbToView } from "../../Utils/stringFunctions";

const PastEvent = ({
  title,
  description,
  eventDate,
  idEvent,
  buttonText
  
}) => {
  function visualizar(idEvent) {
    // dá pra usar a prop idEvent? testar
    alert(`Chamar o recurso para visualizar: ${idEvent}`);
  }
  return (
    <article className="event-card">
      <h2 className="event-card__title">{title}</h2>

      <p
        className="event-card__description"
        data-tooltip-id={idEvent}
        data-tooltip-content={description}
        data-tooltip-place="top"
      >
        <Tooltip id={idEvent} className="tooltip" />
        {description.substr(0, 15)} ...
      </p>

      <p className="event-card__description">
        {/* aplicar a função pra converter a data */}
        {dateFormatDbToView(eventDate)}
      </p>

      <Link to={`/detalhe-evento/${idEvent}`} className="event-card__connect-link">
        {buttonText}
      </Link>

    </article>
  );
};

export default PastEvent;
