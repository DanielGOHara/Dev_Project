
/* ----------------------------------------------- No Longer Used -----------------------------------------------------

export const mergeSort = unsortedArray => {
    if (unsortedArray.length === 1) return unsortedArray;
        const middleIdx = Math.floor(unsortedArray.length / 2);
        const firstHalf = mergeSort(unsortedArray.slice(0, middleIdx));
        const secondHalf = mergeSort(unsortedArray.slice(middleIdx));
        const sortedArray = [];
        let i = 0,
            j = 0;
        while (i < firstHalf.length && j < secondHalf.length) {
            if (firstHalf[i] < secondHalf[j]) {
                sortedArray.push(firstHalf[i++]);
            } else {
                sortedArray.push(secondHalf[j++]);
            }
        }
        while(i < firstHalf.length) sortedArray.push(firstHalf[i++]);
        while(j < secondHalf.length) sortedArray.push(secondHalf[j++]);
        return sortedArray;
};

 ------------------------------------------------------------------------------------------------------------------- */

/* Function for sorting with merge sort animation */

export function getMergeSortAnimations(array) {
  const auxiliaryArray = array.slice(), animations = [];

  /* Check if the array is equal to or less than one and return it that is the true */

  if (array.length <= 1) return array;

  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);

  return animations;
}

function mergeSort(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  const middleIdx = Math.floor((startIdx + endIdx) / 2);

  /* Check if the first index matches the last index and return nothing if it does */

  if (startIdx === endIdx) return;

  mergeSort(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  /* While loop to change bar colour to red, change it back to black, then replace k value with i and j */

  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  /* While loop to change bar colour to red, change it back to black, then replace the k value with i */

  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }

  /* While loop to change bar colour to red, change it back to black, then replace the k value with j */

  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}