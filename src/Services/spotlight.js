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
    // console.log(URL);
    fetch(URL, options)
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        let URIs = []
        data['Resources'].forEach((object) => {
          URIs.push(object['@URI'])
        })
        // console.log(URIs);
        resolve(URIs)
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
