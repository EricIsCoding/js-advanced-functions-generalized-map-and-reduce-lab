// Add your functions here
function map(array, callback) {
    let result = []
  
    for (let i = 0; i < array.length; i++) {
      let theElement = array[i]
      result.push(callback(theElement))
    }
  
    return result;
  }
  
  function reduce(array, callback, start){
    let result = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < array.length; i++) {
      result = callback(array[i], result)
    }
  
    return result;
  }