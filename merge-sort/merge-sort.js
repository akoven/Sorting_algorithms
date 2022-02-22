// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if(arr.length <= 1) return arr;
  // Divide the array in half
  let final = arr.length
  let mid = Math.floor(final/2)
  let leftHalf = arr.slice(0,mid)
  let rightHalf = arr.slice(mid)
  // Recursively sort the left half
  let sortedLeft = mergeSort(leftHalf)
  // Recursively sort the right half
  let sortedRight = mergeSort(rightHalf)

  // Merge the halves together and return
  return merge(sortedLeft,sortedRight)

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while(indexA < arrA.length || indexB < arrB.length){
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if(indexA === arrA.length){
      merged.push(arrB[indexB])
      indexB++
    }else if(indexB === arrB.length){
      merged.push(arrA[indexA])
      indexA++
    }else if(arrA[indexA] < arrB[indexB]){
      merged.push(arrA[indexA])
      indexA++
    }else if(arrB[indexB] < arrA[indexA]){
      merged.push(arrA[indexA])
    }
  }
  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
