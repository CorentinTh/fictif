const BASE_URL = 'https://dbpedia.org/sparql'

/**
 * Execute SparQL queries against dbpedia api
 * @param query - A SparQL query
 * @returns {Promise<Response | *[]>}
 */
const sparqlExecutor = (query) => fetch(`${BASE_URL}?query=${encodeURIComponent(query)}&format=json`)
  .then(response => response.status >= 200 && response.status < 300 ? response.json() : Promise.reject(response))
  .then(data => data?.results?.bindings)
  .catch(_ => [])

export {
  sparqlExecutor
}
