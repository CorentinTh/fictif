import { makeRequestSpotlight } from './spotlight';
import { sparqlExecutor } from './sparql';

const getRelatedCharacters = node =>
  sparqlExecutor(`
    select distinct
        ?name
        ?thumbnail
        ?description

     where {
      ?subject rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .
      ?subject ?tmp1 <${node}> .
      ?subject rdfs:label ?name

      OPTIONAL { ?subject dct:description ?description}
      OPTIONAL { ?subject dbo:thumbnail ?thumbnail .}

      FILTER (lang(?name)='en')
    }
    LIMIT 100`);

const getCharactersFromQuery = async (query) => {
  const topics = await makeRequestSpotlight(query);
  const [data] = await Promise.all(topics.map(getRelatedCharacters));
  console.log({ topics, data });
  return data && data.length > 0 ? data.map(node => Object.entries(node).reduce((acc, [key, data]) => Object.assign(acc, { [key]: data.value.replace(/\\\\/g, '') }), {})) : [];
};

export {
  getCharactersFromQuery
};
