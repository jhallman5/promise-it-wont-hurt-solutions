attachTitle = (arg)  => { return 'DR. ' + arg }

const promise = Promise.resolve('MANHATTAN')

promise.then(attachTitle).then( (result) => console.log(result) )
