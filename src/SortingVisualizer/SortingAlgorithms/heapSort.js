
export function getHeapSortAnimations(array) {
  let auxiliaryArray = array.slice(0), animations = [];
  buildMaxHeap(auxiliaryArray, animations);
  let end = auxiliaryArray.length - 1;
  while (end > 0) {
    animations.push([0, end]);
    let temp = auxiliaryArray[end];
    auxiliaryArray[end] = auxiliaryArray[0];
    auxiliaryArray[0] = temp;
    animations.push([0, end, true]);
    animations.push(auxiliaryArray.slice(0));
    animations.push([]);
    animations.push([true, end]);
    siftDown(auxiliaryArray, 0, end, animations);
    end--;
  }
  animations.push([true, end]);
  return animations;
}

function buildMaxHeap(auxiliaryArray, animations) {
  let currentIndex = Math.floor(auxiliaryArray.length / 2);
  while (currentIndex >= 0) {
    siftDown(auxiliaryArray, currentIndex, auxiliaryArray.length, animations);
    currentIndex--;
  }
}

function siftDown(auxiliaryArray, start, end, animations) {
  if (start >= Math.floor(end / 2)) {
    return;
  }
  let left = start * 2 + 1,
    right = start * 2 + 2 < end ? start * 2 + 2 : null,
    swap;
  if (right) {
    animations.push([start, left, right]);
    swap = auxiliaryArray[left] > auxiliaryArray[right] ? left : right;
  } else {
    animations.push([start, left]);
    swap = left;
  }
  if (auxiliaryArray[start] < auxiliaryArray[swap]) {
    let temp = auxiliaryArray[swap];
    auxiliaryArray[swap] = auxiliaryArray[start];
    auxiliaryArray[start] = temp;
    animations.push([start, swap, true]);
    animations.push(auxiliaryArray.slice(0));
    siftDown(auxiliaryArray, swap, end, animations);
  }
}