import axios from 'axios'

function makeRequestSpotlight (confidence = 0.5, query) {
  return new Promise((resolve, reject) => {
    query = encodeURIComponent(query)
    let URL = 'https://api.dbpedia-spotlight.org/en/annotate?text=' + query + '&confidence=' + confidence
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
        if (data['Resources']) {
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
        console.log(error.response.status + ' ' + error.response.statusMessage)
        resolve([])
      })
  })
}

export {
  makeRequestSpotlight
}
