import axios from 'axios';

const BASE_URL = 'http://dbpedia.org/sparql';

/**
 * Execute SparQL queries against dbpedia api
 * @param query - A SparQL query
 * @returns {Promise<Response | *[]>}
 */
const sparqlExecutor = (query = '') => axios.get(`${BASE_URL}?query=${encodeURIComponent(query)}&format=json`)
  .then(result => result?.data?.results?.bindings ?? [])
  .catch(_ => []);

/**
 * Get a character info
 * @param character - Character name or label
 * @returns {Promise<Response | *[]>}
 */
const getCharacterInfo = (character = '') => sparqlExecutor(`
    SELECT distinct
           ?name
           ?gender
           ?abstract
           ?job
           ?nationality
           ?thumbnail
           ?description

    WHERE {
        ?subject rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .
        {?subject rdfs:label ?name} UNION {?subject dbp:name ?name}

        OPTIONAL { ?subject dbo:abstract ?abstract }
        OPTIONAL { ?subject foaf:gender ?gender }
        OPTIONAL { ?subject dbo:occupation ?jobtmp . ?jobtmp rdfs:label? ?job . FILTER (lang(?job)='en')}
        OPTIONAL { ?subject dbo:thumbnail ?thumbnail .}
        OPTIONAL { ?subject dbo:nationality ?nationality}
        OPTIONAL { ?subject dct:description ?description}

        FILTER (lang(?abstract)='en')
        FILTER (lang(?name)='en')

        FILTER (str(?name) = "${character}")
    }
    LIMIT 1
  `)
  .then(result => result && result[0] ? Object.entries(result[0]).reduce((acc, [key, data]) => Object.assign(acc, { [key]: data.value }), {}) : null);

export {
  sparqlExecutor,
  getCharacterInfo
};
