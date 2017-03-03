const parsePromised = (arg) => {
 return new Promise( (resolve, reject) => {
    try {
      resolve(JSON.parse(arg))
    } catch (error) {
      reject( error )
    }
  })
}

parsePromised(process.argv[2])
  .then( null, (error) => console.log(error) )
