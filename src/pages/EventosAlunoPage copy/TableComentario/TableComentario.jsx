import React, { useContext, useEffect, useState } from "react";
import comentaryIcon from "../../../assets/images/comentary-icon.svg";
import { dateFormateDbToView } from "../../../Utils/stringFunctions";
import ToggleSwitch from "../../../components/Toggle/Toggle";
// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip } from "react-tooltip";
import Title from "../../../components/Title/Title";
import Container from "../../../components/Container/Container";
// import trashDelete from "../../../assets/images/trash-delete.svg";
import "./TableComentario.css";
import { UserContext } from "../../../context/AuthContext";
import api, { commentaryShowEventResource } from "../../../Services/Service";
import MainContent from "../../../components/MainContent/MainContent";

const TableComment = ({id}) => {

  const [comentario, setComentario] = useState([]);

  const { userData } = useContext(UserContext)

  useEffect(()=> {
    loadComentary()
  },[])

  async function loadComentary(){

    try {
      const retorno = await api.get(`${commentaryShowEventResource}?id=${id}`)
      console.log(retorno.data);
      setComentario(retorno.data)
    } catch (error) {
      alert(error)
    }
  }


  return (
    <MainContent>
      <Container>
      <Title
            titleText={"Feedback"}
       color='white'
          />

    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Usuario
          </th>
    
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Comentarios
          </th>
       
        </tr>
      </thead>
      <tbody>
       {comentario.map((e)=>{
        return(
          <tr className="tbal-data__head-row">

          <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
            {e.usuario.nome}
          </td>
       
          <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
            {e.descricao}
          </td>
       
        </tr>
        )


       })}
         
      </tbody>
    </table>
    </Container>
    </MainContent> 
  );
};

export default TableComment;
