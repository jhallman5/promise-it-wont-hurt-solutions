const FS = require('q-io/fs')

FS.read(/localhost:1337/)
  .then(console.log)
