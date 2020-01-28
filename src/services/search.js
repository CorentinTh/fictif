import { cleanResults, sparqlExecutor } from './sparql';

const cleanQuery = query => query.toLowerCase().replace(/(["'\\])/g, '\\$1').replace(/\s\s+/g, ' ').trim().split(' ');

const buildRequest = keywords => {
  const varAbst = keywords.map((_, i) => `?ab${i}`);
  const varName = keywords.map((_, i) => `?na${i}`);
  const varDesc = keywords.map((_, i) => `?de${i}`);

  return `
    select distinct
      ?name
      ?description
      ((${varAbst.join('+')}) + (${varName.join('*3 +')}*3) + (${varDesc.join('*2 +')}*2) as ?score)
    where {

      ?su rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .
      ?su dbo:abstract ?d .
      ?su rdfs:label ?name

      OPTIONAL { ?su dct:description ?description}

      ${keywords.map((k, i) => `BIND(exists{?su dct:description ?de . ?de bif:contains "'${k}'"} as ?de${i})`).join('\n')}
      ${keywords.map((k, i) => `BIND(exists{?su dbo:abstract ?ab . ?ab bif:contains "'${k}'"} as ?ab${i})`).join('\n')}
      ${keywords.map((k, i) => `BIND(exists{?su foaf:name ?na . ?na bif:contains "'${k}'"} as ?na${i})`).join('\n')}

      FILTER (LANG(?name)='en')
    }
    ORDER BY DESC(?score)
    LIMIT 56`.replace(/\s\s+/g, ' ').trim();
};

const getCharactersFromQuery = async (query) => {
  const keywords = cleanQuery(query);
  const request = buildRequest(keywords);
  const data = await sparqlExecutor(request);
  const clean = cleanResults(data);

  return clean.filter(result => result.score > 0);
};

export {
  getCharactersFromQuery
};
