var promise = new Promise( (resolve, reject) => {
  setTimeout( () => reject( new Error('REJECTED!') ), 300)
}).then(undefined, (Error) => console.log(Error.message) )
