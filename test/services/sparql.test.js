import { sparqlExecutor } from '../../src/services/sparql'

it('should returns empty array if empty params', async () => {
  const result = await sparqlExecutor()

  expect(result).toEqual([])
  expect(result).toHaveLength(0)
})

it('should returns empty array if wrong params', async () => {
  await Promise.all(
    [
      '',
      'azert',
      '456'
    ].map(async string => {
      const result = await sparqlExecutor(string)

      expect(result).toEqual([])
      expect(result).toHaveLength(0)
    })
  )
})

it('should execute sparql query', async () => {
  const query = '' +
    'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n' +
    'select distinct ?c ?label where {\n' +
    '    ?c rdf:type <http://dbpedia.org/ontology/FictionalCharacter> .\n' +
    '    ?c rdfs:label ?label .\n' +
    '    FILTER (lang(?label) = \'fr\')\n' +
    '}'

  const result = await sparqlExecutor(query)

  expect(result).not.toHaveLength(0)
})
