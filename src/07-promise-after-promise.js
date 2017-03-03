first().then((response) => second(response)).then((result) => console.log(result))

first()
  .then( function(response) {
    second(response)
  })
  .then( function( result) {
    console.log(result)
  })
