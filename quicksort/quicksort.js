function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if(arr.length <= 1) return arr

  // Pick the first value as the pivot
  let pivot = arr[0]
  let leftArr = []
  let rightArr = []
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
          leftArr.push(arr[i])
          // every number larger (or equal) than the pivot is to the right
        }else{
          rightArr.push(arr[i])
        }
      }

  // Recursively sort the left
  let leftSorted = quicksort(leftArr)
  // Recursively sort the right
  let rightSorted = quicksort(rightArr)

  // Return the left, pivot and right in sorted order
  return [...leftSorted,pivot,...rightSorted]
}


module.exports = [quicksort];
