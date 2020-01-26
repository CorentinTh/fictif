import { sparqlExecutor } from './sparql';

const getRelatedCharacters = keywords => {
  const variables = keywords.map((_, i) => `?t${i}`);

  return sparqlExecutor(`
    select distinct
      ?name
      ?thumbnail
      ?description
      (${variables.join('+')} as ?score)
    where {

      ?subject rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .
      ?subject dbo:abstract ?ab .

      BIND(LCASE(STR(?ab)) as ?d)

      ${keywords.map((k, i) => `BIND(CONTAINS(?d, "${k}") as ?t${i})`).join('\n')}
      FILTER (LANG(?name)='en' && (${variables.join('||')}))

      ?subject rdfs:label ?name
      OPTIONAL { ?subject dct:description ?description}
      OPTIONAL { ?subject dbo:thumbnail ?thumbnail .}
    }
    ORDER BY DESC(?score)
    LIMIT 50`);
};

const getCharactersFromQuery = async (query) => {
  const data = await getRelatedCharacters(query.toLowerCase().split(' '));
  return data && data.length > 0 ? data.map(node => Object.entries(node).reduce((acc, [key, data]) => Object.assign(acc, { [key]: data.value.replace(/\\\\/g, '') }), {})) : [];
};

export {
  getCharactersFromQuery
};
