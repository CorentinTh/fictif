import axios from 'axios'

function makeRequestSpotlight (query = '') {
  return new Promise((resolve, reject) => {
    query = encodeURIComponent(query)
    let URL = 'https://api.dbpedia-spotlight.org/en/annotate?text=' + query + '&confidence=0.8'
    axios.get(URL)
      // fetch(URL, options)
      .then((result) => {
        if (result.status < 300 && result.status >= 200) {
          return result.data
        } else {
          return { 'Resources': [] }
        }
      })
      .then((data) => {
        if (data['Resources'] != null) {
          let URIs = []
          data['Resources'].forEach((object) => {
            URIs.push(object['@URI'])
          })
          resolve(URIs)
        } else {
          resolve([])
        }
      })
      .catch(error => {
        reject(error.response)
      })
  })
}

export {
  makeRequestSpotlight
}
