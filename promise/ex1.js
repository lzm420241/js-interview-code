// promose常见面试题
const promise1 = new Promise((resolve, reject) => reject())
const promise2 = promise1.then(null, function(){return 123;})
promise2.then(() => {
  console.log('promise2 已完成')
}, () =>{
  console.log('promise2 已拒绝')
})