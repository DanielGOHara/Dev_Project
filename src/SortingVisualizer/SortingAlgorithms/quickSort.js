
/* Function for sorting with quick sort animation */

export function getQuickSortAnimations(array) {
  let auxiliaryArray = array.slice(0), animations = [];
  quickSort(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
  return animations;
}

function quickSort(auxiliaryArray, startIdx, endIdx, animations) {
  animations.push(auxiliaryArray.slice(0));
  if (startIdx >= endIdx) {
    return;
  }

  /* Set new pivot point and left/right points */

  let pivot = startIdx, left = startIdx + 1, right = endIdx;
  animations.push([pivot, 0, "pivot"]);

  /* Once the right point is less than the left, the while loop is broken */

  while (right >= left) {
    if (auxiliaryArray[right] < auxiliaryArray[pivot] && auxiliaryArray[left] > auxiliaryArray[pivot]) {
      animations.push([left, right, "swap"]);
      let temp = auxiliaryArray[right];
      auxiliaryArray[right] = auxiliaryArray[left];
      auxiliaryArray[left] = temp;
      animations.push(auxiliaryArray.slice(0));
    }

    if (auxiliaryArray[right] >= auxiliaryArray[pivot]) right--;

    if (auxiliaryArray[left] <= auxiliaryArray[pivot]) left++;

    if (right >= left) animations.push([left, right, "left right"]);
  }

  /* If pivot does not equal the right point it is updated */

  animations.push([pivot, right, "pivot, right"]);
  if (pivot !== right) {
    let temp = auxiliaryArray[right];
    auxiliaryArray[right] = auxiliaryArray[pivot];
    auxiliaryArray[pivot] = temp;
    animations.push([pivot, right, "pivot, right"]);
    animations.push(auxiliaryArray.slice(0));
  }
  quickSort(auxiliaryArray, startIdx, right - 1, animations);
  quickSort(auxiliaryArray, right + 1, endIdx, animations);
}