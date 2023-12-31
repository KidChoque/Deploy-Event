import axios from 'axios';

/**
 * Módulo para trabalhar com apis. Disponibiliza as rotas da api bem como o serviço com a biblioteca axios
 */



/**
Rota para buscar evento por id   
 */
export const eventsByIdResource = '/Evento/{id}';

/**
 * Rota para o recurso Evento
 */
export const eventsResource = '/Evento';
/**
 * Rota para o recurso Listar Minhas Presenças
 */
export const myEventsResource = '/PresencasEvento/ListarMinhas';
/**
 * Rota para o recurso Presenças Evento
 */
export const presencesEventResource = '/PresencasEvento';
/**
 * Rota para o recurso Presenças Evento
 */

/**Rota para comentarios IA */
export const commentaryShowEventResource = '/ComentariosEvento/ListarSomenteExibe';

/** Rota para comentario geral*/
export const commentaryEventResource = '/ComentariosEvento';


/**
 * Rota para o recurso Próximos Eventos
 */
export const nextEventResource = '/Evento/ListarProximos';

/**
 * Rota para o recurso Tipos de Eventos
*/
export const eventsTypeResource = '/TiposEvento';

//Rota para eventos Anteriores 

export const pastEventResource = 'Evento/ListarAnteriores';


/**
 * Rota para o recurso Instituição
 */
export const institutionResource = '/Instituicao';
/**
 * Rota para o recurso Login
 */
export const loginResource = '/Login';

// const apiPort = '5000';
// const localApiUri = `http://localhost:${apiPort}/api`;
const externalApiUri = 'https://eventwebapi-lucasmachado.azurewebsites.net/api'
// const externalApiUri = null;

const api = axios.create({
    baseURL: externalApiUri
});



export default api;