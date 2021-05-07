
export function getHeapSortAnimations(array) {
  let auxiliaryArray = array.slice(0), animations = [];
  buildMaxHeap(auxiliaryArray, animations);
  let end = auxiliaryArray.length - 1;

  /* While loop used to extract am element from the heap */

  while (end > 0) {
    animations.push([0, end, "swap"]);
    let temp = auxiliaryArray[end];
    auxiliaryArray[end] = auxiliaryArray[0];
    auxiliaryArray[0] = temp;
    animations.push(auxiliaryArray.slice(0));

    /* Call max heapify on the reduced heap */

    siftDown(auxiliaryArray, 0, end, animations);
    end--;
  }
  return animations;
}

/* Creates several sifts depending on how many times the array can divided by 2 */

function buildMaxHeap(auxiliaryArray, animations) {
  let currentIndex = Math.floor(auxiliaryArray.length / 2);
  while (currentIndex >= 0) {
    siftDown(auxiliaryArray, currentIndex, auxiliaryArray.length, animations);
    currentIndex--;
  }
}

/* Function that pushes the controlled value down the array swapping it if a larger one is found */

function siftDown(auxiliaryArray, start, end, animations) {
  animations.push(auxiliaryArray.slice(0));
  if (start >= Math.floor(end / 2)) {
    return;
  }
  let left = start * 2 + 1,
    right = start * 2 + 2 < end ? start * 2 + 2 : null,
    swap;
  if (right) {
    swap = auxiliaryArray[left] > auxiliaryArray[right] ? left : right;
  } else {
    swap = left;
  }

  /* If a value that is higher is found it is swapped and used to when sifting down the array */

  if (auxiliaryArray[start] < auxiliaryArray[swap]) {
    let temp = auxiliaryArray[swap];
    auxiliaryArray[swap] = auxiliaryArray[start];
    auxiliaryArray[start] = temp;
    animations.push([start, swap, "swap"]);
    animations.push(auxiliaryArray.slice(0));

    /* Recursively heapify the affected sub-tree arrays */

    siftDown(auxiliaryArray, swap, end, animations);
  }
}