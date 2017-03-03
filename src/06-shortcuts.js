const promise = new Promise( (resolve, reject) => {
  reject( new Error('REJECT THIS') )
}).catch( (Error) => console.log(Error.message) )

const promise1 = Promise.resolve('Secret')

const promise2 = Promise.reject('Secret')
