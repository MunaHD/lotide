

const flatten = function (arr) {
  let newArr = [];
  for (let item in arr) {
    // console.log("arr", arr)
    // console.log("item", item)
    // console.log("arr[item]", arr[item])
    //create variable to hold element value
    let value = arr[item]
    
    if (!Array.isArray(value)) {
      newArr.push(value)
    } else {
      value.map(x => newArr.push(x))
    }

  }
  console.log(newArr)
}

flatten([1, 2, [3, 4], 5, [6]])
