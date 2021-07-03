var arr= [1,2,3,4,5,6,7,8]
// insert at last
arr.push(9)
console.log(arr)
// insert ar first
arr.unshift(10)
console.log(arr)
// insert 12 to index 3
arr.splice(3, 0 , 12)
console.log(arr)
//delete last element
arr.pop()
console.log(arr)
//delete first element
arr.shift()
console.log(arr)
//remove index 3 element
arr.splice(3,1)
console.log(arr)