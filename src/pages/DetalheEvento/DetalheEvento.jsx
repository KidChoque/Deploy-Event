import React from 'react';

const DetalheEvento = () => {
    return (
        <>
          <MainContent>
            <Container>
              <Title titleText={"Eventos"} additionalClass="custom-title" />
    
              <Select
                id="id-tipo-evento"
                name="tipo-evento"
                required={true}
                options={quaisEventos} // aqui o array dos tipos
                manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
                defaultValue={tipoEvento}
                additionalClass="select-tp-evento"
              />
              <Table
                dados={eventos}
                fnConnect={handleConnect}
                fnShowModal={showHideModal}
              />
            </Container>
          </MainContent>
          {/* SPINNER -Feito com position */}
          {showSpinner ? <Spinner /> : null}
    
          {showModal ? (
            <Modal
              // userId={userData.userId}
              showHideModal={showHideModal}
              fnGet={loadMyCommentary}
              fnPost={postMyCommentary}
              fnDelete={commentaryRemove}
              comentaryText={comentario}
              userId={userData.userId}
              idEvento={idEvento}
              idComentario={idComentario}
            />
          ) : null}
        </>
      );    
};

export default DetalheEvento;