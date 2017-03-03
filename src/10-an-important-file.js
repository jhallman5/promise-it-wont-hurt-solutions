const Q = require('q')
alwaysThrows = () => {
  throw new Error("OH NOES")
}

iterate = (arg = 1 )  => {
  console.log(arg)
  return ++arg
}

 Q.fcall(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(alwaysThrows)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
  .catch(console.log)
