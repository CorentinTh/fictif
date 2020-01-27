import { sparqlExecutor } from './sparql';

const cleanQuery = query => query.toLowerCase().replace(/(["'\\])/g, '\\$1').replace(/\s\s+/g, ' ').trim().split(' ');

const buildRequest = keywords => {
  const varAbstract = keywords.map((_, i) => `?ab${i}`);

  return `
    select distinct
      ?name
      ?thumbnail
      ?description
      (${varAbstract.join('+')} as ?score)
    where {

      ?subject rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .
      ?subject dbo:abstract ?d .
      ?subject rdfs:label ?name
      OPTIONAL { ?subject dct:description ?description}
      OPTIONAL { ?subject dbo:thumbnail ?thumbnail .}

      ${keywords.map((k, i) => `BIND(REGEX(?d, "(^| )${k}", "i") as ?ab${i})`).join('\n')}
      FILTER (LANG(?name)='en' && (${varAbstract.join('||')}))
    }
    ORDER BY DESC(?score)
    LIMIT 56`.replace(/\s\s+/g, ' ').trim();
};

const getCharactersFromQuery = async (query) => {
  const keywords = cleanQuery(query);
  const request = buildRequest(keywords);
  const data = await sparqlExecutor(request);

  return data && data.length > 0 ? data.map(node => Object.entries(node).reduce((acc, [key, data]) => Object.assign(acc, { [key]: data.value.replace(/\\\\/g, '') }), {})) : [];
};

export {
  getCharactersFromQuery
};
