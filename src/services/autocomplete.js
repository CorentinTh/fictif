import { sparqlExecutor } from './sparql';

const getResultsForAutocomplete = (base) => {
  return sparqlExecutor(`
      SELECT ?name WHERE  {
        ?su rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .
        ?su rdfs:label ?name
        FILTER (LANG(?name)='en' && REGEX(?name, "^${base}.*", "i"))
       }
      ORDER BY ASC(?name)
      LIMIT 10
  `)
    .then(data => data && data.length > 0 ? data.map(node => Object.entries(node).reduce((acc, [key, data]) => Object.assign(acc, { [key]: data.value.replace(/\\\\/g, '') }), {})) : [])
    .then(data => data.map(d => d.name));
};

export {
  getResultsForAutocomplete
};
