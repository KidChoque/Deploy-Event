import React, { useContext, useEffect, useState } from "react";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";
import Table from "./TableEvA/TableEvA";
import TableComment from "./TableComentario/TableComentario";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, {
  eventsResource,
  commentaryEventResource,
} from "../../Services/Service";
import { useParams } from "react-router-dom";
import "./DetalheEvento.css";
import { UserContext } from "../../context/AuthContext";
import {
  dateFormatDbToView,
  dateFormateDbToView,
} from "../../Utils/stringFunctions";

const DetalheEvento = () => {
  const { idEvento } = useParams();
  // state do menu mobile
  const [eventos, setEventos] = useState([]);
  const [dataEvento, setDataEvento] = useState([]);
  const [descricao, setDescricao] = useState([]);
  // const [showSpinner, setShowSpinner] = useState(false);
  // recupera os dados globais do usuário

  const [idComentario, setIdComentario] = useState(null);

  async function loadEventsById() {
    const retorno = await api.get(`${eventsResource}/${idEvento}`);

    setEventos(retorno.data.nomeEvento);
    setDescricao(retorno.data.descricao);
    setDataEvento(dateFormateDbToView(retorno.data.dataEvento));

    console.log(retorno.data);
  }

  useEffect(() => {
    loadEventsById();
  }, []); //

  return (
    <>
      <MainContent>
        <Container>
          <Title
            titleText={"Detalhes do Evento"}
            additionalClass="custom-title"
          />

          <Table
            nomeEvento={eventos}
            descricao={descricao}
            dataEvento={dataEvento}
          />
          <section className="lista-eventos-section">
            <TableComment id={idEvento} />
          </section>
        </Container>
      </MainContent>
      {/* SPINNER -Feito com position */}
      {/* {showSpinner ? <Spinner /> : null} */}
    </>
  );
};

export default DetalheEvento;
