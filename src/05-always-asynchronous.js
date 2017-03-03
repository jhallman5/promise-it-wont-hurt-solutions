const promise = new Promise( (resolve, reject) => {
  resolve('PROMISE VALUE')
}).then( (response) => console.log(response) )

console.log("MAIN PROGRAM")
