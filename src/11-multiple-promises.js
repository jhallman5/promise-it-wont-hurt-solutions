var promiseChain1 = findUserById(12).then(user =>{
  console.log('user 12', user)
})

var promiseChain2 = findUserById(88).then(user =>{
  console.log('user 88', user)
})


promiseChain1.then((user12) => {
  return promiseChain2
})
.then(user88 => {

})

Promise.all([
  promiseChain1,
  promiseChain2,
])
.then((users) => {

})


// const delay = (milliseconds) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function(){ resolve(new Date) }, milliseconds)
//   })
// }
//
// const findUserById = (id) => {
//   console.log('looking up user '+id+' in the DB')
//   return delay(1000)
//     .then(() => {
//       return {
//         id: id,
//         name: 'Jared'
//       }
//     })
// }
//
//
// findUserById(12)
//   .then(user12 => {
//     console.log('user 12 => ', user12)
//   })
//   .then(() => {
//     return findUserById(52)
//   })
//   .then(user52 => {
//     console.log('user 52 => ', user52)
//   })
//
// findUserById(12, user12 => {
//   console.log('user 12 => ', user12)
//   findUserById(52, user52 => {
//     console.log('user 52 => ', user52)
//     anotherStep(() => {
//
//     })
//   })
// })
//
//
//
// Promise.all([
//   findAllBlogPosts()
//   findAllBlogPostComments()
// ])
// .then((results) => {
//   const posts = results[0]
//   const comments = results[1]
// })
//
//
//
//
//
//
// //
// // console.log('A', new Date)
// // delay(2000)
// //   .then(() => {
// //     console.log('B')
// //     return 'hello there'
// //   })
// //   .then(() => {
// //     console.log('C')
// //     return delay(2000)
// //   })
// //   .then(() => {
// //     console.log('D')
// //     return delay(2000)
// //   })
// //   .then((y) => {
// //     console.log('E')
// //     return 'something else'
// //   })
// //
// //
// // //
// // //
// // // const getACat = () => {
// // //   return new Promise((resove, reject) => {
// // //     setTimeout(function(){
// // //       resolve('red tabby')
// // //     })
// // //   })
// // // }
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // // function all(promise1, promise2) {
// // //   var counter = 0
// // //   var result = []
// // //   return new Promise(function(resolve, reject) {
// // //     return promise1.then(function(response) {
// // //       counter++
// // //       result.push(response)
// // //       return promise2.then(function(response) {
// // //         counter++
// // //         result.push(response)
// // //         resolve(result)
// // //       })
// // //     })
// // //   })
// // //
// // // }
// // //
// // //
// // // all(getPromise1(), getPromise2())
// // // .then(function(response) {
// // //   console.log(response)
// // // })
