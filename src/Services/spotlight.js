function makeRequestSpotlight (query) {
  return new Promise((resolve, reject) => {
    let myHeaders = {
      accept: 'application/json'
    }

    let options = {
      method: 'GET',
      headers: myHeaders
    }
    query = encodeURIComponent(query)
    let URL = 'https://api.dbpedia-spotlight.org/en/annotate?text=' + query + '&confidence=0.8'
    fetch(URL, options)
      .then((result) => {
        if (result.ok) {
          return result.json()
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
        console.log(error)
        reject(error)
      })
  })
}

export {
  makeRequestSpotlight
}
