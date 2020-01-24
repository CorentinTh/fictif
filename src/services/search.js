import { makeRequestSpotlight } from './spotlight';
import { getCharacterInfo, sparqlExecutor } from './sparql';

let getCharFromRessource = 'select distinct ?p where {\n' +
  '\n' +
  '  ?p rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .\n' +
  '  ?p ?m ?d .\n' +
  '  ?d ?tmp <$replace> \n' +
  '\n' +
  '} LIMIT 100\n';

const makeSearch = function (query = '') {
  return new Promise((resolve, reject) => {
    let result = [];
    makeRequestSpotlight(query)
      .then((spotlightResults) => {
        spotlightResults.forEach((elem) => {
          sparqlExecutor(getCharFromRessource.replace('$replace', elem))
            .then((resSparql) => {
              resSparql.forEach((character) => {
                let charToGet = character.p.value.split('/');
                getCharacterInfo(charToGet[charToGet.length - 1]).then((sparqlResult) => {
                  if (sparqlResult) {
                    result.push(sparqlResult);
                  }
                });
              });
              resolve(result);
            });
        });
      });
  });
};

export {
  makeSearch
};
