import axios from 'axios';

const BASE_URL = 'https://dbpedia.org/sparql';

/**
 * Execute SparQL queries against dbpedia api
 * @param query - A SparQL query
 * @returns {Promise<Response | *[]>}
 */
const sparqlExecutor = (query = '') => axios.get(`${BASE_URL}?query=${encodeURIComponent(query)}&format=json`)
  .then(result => result?.data?.results?.bindings ?? [])
  .catch(_ => []);

export {
  sparqlExecutor
};
