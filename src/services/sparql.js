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

/**
 * Get a character info
 * @param character - Character name or label
 * @returns {Promise<Response | *[]>}
 */
const getCharacterInfo = (character = '') => sparqlExecutor(`
    SELECT distinct
           ?subject
           ?name
           ?gender
           ?abstract
           ?job
           ?nationality
           ?species
           ?thumbnail
           ?description
           ?birthDate
           ?creator
           ?country
          (GROUP_CONCAT(DISTINCT ?relatives; SEPARATOR=", ") AS ?relatives)
          (GROUP_CONCAT(DISTINCT ?child; SEPARATOR=", ") AS ?child)
          (GROUP_CONCAT(DISTINCT ?spouse; SEPARATOR=", ") AS ?spouse)

    WHERE {
        ?subject rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .
        {?subject rdfs:label ?name} UNION {?subject dbp:name ?name}

        OPTIONAL { ?subject dbo:abstract ?abstract }
        OPTIONAL { ?subject foaf:gender ?gender }
        OPTIONAL { ?subject dbo:occupation ?jobtmp . ?jobtmp rdfs:label? ?job . FILTER (lang(?job)='en')}
        OPTIONAL { ?subject dbo:thumbnail ?thumbnail .}
        OPTIONAL { ?subject dbo:nationality ?nationality}
        OPTIONAL { ?subject dct:description ?description}
        OPTIONAL { ?subject dbp:species ?species}
        OPTIONAL { ?subject dbp:country ?country}
        OPTIONAL { ?subject dbo:birthDate ?birthDate}
        OPTIONAL { ?subject dbo:creator ?cr . ?cr rdfs:label ?creator FILTER(lang(?creator) = 'en')}

        OPTIONAL { ?subject dbp:relatives ?r1 . ?r1 rdfs:label ?relatives FILTER(lang(?relatives) = 'en')}
        OPTIONAL { ?subject dbo:child ?r2 . ?r2 rdfs:label ?child FILTER(lang(?child) = 'en')}
        OPTIONAL { ?subject dbo:spouse ?r3 . ?r3 rdfs:label ?spouse FILTER(lang(?spouse) = 'en')}

        FILTER (lang(?abstract)='en')
        FILTER (lang(?name)='en')

        FILTER (str(?name) = "${character}")
    }
    LIMIT 1
  `)
  .then(result => result && result[0] ? Object.entries(result[0]).reduce((acc, [key, data]) => Object.assign(acc, { [key]: data.value.replace(/\\\\/g, '') }), {}) : null);

export {
  sparqlExecutor,
  getCharacterInfo
};
