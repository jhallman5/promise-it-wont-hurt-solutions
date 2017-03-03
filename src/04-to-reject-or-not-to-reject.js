var promise = new Promise( (resolve, reject) => {
  resolve('I FIRED')
  reject(new Error('I DID NOT FIRE'))
}).then( (response) => console.log(response), onRejected = (Error) => console.log(Error.message) )
