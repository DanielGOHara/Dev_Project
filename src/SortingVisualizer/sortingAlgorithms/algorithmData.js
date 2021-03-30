
/* Exported variable that stores in JSON format information on each algorithms space complexity */

export const data = [{
  "algorithm" : "MergeSort",
  "worstPerformance" : "O(n log n). ",
  "bestPerformance" : "O(n log n) Typical,  O(n) Natural Variant. ",
  "averagePerformance" : "O(n log n). ",
  "worstSpaceComplex" : "O(n) Total with O(n), O(1) Auxiliary with linked lists.",
  "code" : "export function getMergeSortAnimations(array) {\n" +
    "  const auxiliaryArray = array.slice(), animations = [];\n" +
    "\n" +
    "  /* Check if the array is equal to or less than one and return it that is the true */\n" +
    "\n" +
    "  if (array.length <= 1) return array;\n" +
    "\n" +
    "  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);\n" +
    "\n" +
    "  return animations;\n" +
    "}\n" +
    "\n" +
    "function mergeSort(mainArray, startIdx, endIdx, auxiliaryArray, animations) {\n" +
    "  const middleIdx = Math.floor((startIdx + endIdx) / 2);\n" +
    "\n" +
    "  /* Check if the first index matches the last index and return nothing if it does */\n" +
    "\n" +
    "  if (startIdx === endIdx) return;\n" +
    "\n" +
    "  mergeSort(auxiliaryArray, startIdx, middleIdx, mainArray, animations);\n" +
    "  mergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);\n" +
    "  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);\n" +
    "}\n" +
    "\n" +
    "function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {\n" +
    "  let k = startIdx;\n" +
    "  let i = startIdx;\n" +
    "  let j = middleIdx + 1;\n" +
    "\n" +
    "  /* While loop to change bar colour to red, change it back to black, then replace k value with i and j */\n" +
    "\n" +
    "  while (i <= middleIdx && j <= endIdx) {\n" +
    "    animations.push([i, j]);\n" +
    "    animations.push([i, j]);\n" +
    "    if (auxiliaryArray[i] <= auxiliaryArray[j]) {\n" +
    "      animations.push([k, auxiliaryArray[i]]);\n" +
    "      mainArray[k++] = auxiliaryArray[i++];\n" +
    "    } else {\n" +
    "      animations.push([k, auxiliaryArray[j]]);\n" +
    "      mainArray[k++] = auxiliaryArray[j++];\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  /* While loop to change bar colour to red, change it back to black, then replace the k value with i */\n" +
    "\n" +
    "  while (i <= middleIdx) {\n" +
    "    animations.push([i, i]);\n" +
    "    animations.push([i, i]);\n" +
    "    animations.push([k, auxiliaryArray[i]]);\n" +
    "    mainArray[k++] = auxiliaryArray[i++];\n" +
    "  }\n" +
    "\n" +
    "  /* While loop to change bar colour to red, change it back to black, then replace the k value with j */\n" +
    "\n" +
    "  while (j <= endIdx) {\n" +
    "    animations.push([j, j]);\n" +
    "    animations.push([j, j]);\n" +
    "    animations.push([k, auxiliaryArray[j]]);\n" +
    "    mainArray[k++] = auxiliaryArray[j++];\n" +
    "  }\n" +
    "}"}, {

  "algorithm" : "QuickSort",
  "worstPerformance" : "O(n2). ",
  "bestPerformance" : "O(n log n) Simple Partition, O(n) Three-Way Partition & Equal Keys. ",
  "averagePerformance" : "O(n log n). ",
  "worstSpaceComplex" : "O(n) Auxiliary (Naive), O(log n) Auxiliary (Hoare 1962).",
  "code" : "export function getQuickSortAnimations(array) {\n" +
    "  let auxiliaryArray = array.slice(0), animations = [];\n" +
    "  quickSort(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);\n" +
    "  return animations;\n" +
    "}\n" +
    "\n" +
    "function quickSort(auxiliaryArray, startIdx, endIdx, animations) {\n" +
    "  animations.push(auxiliaryArray.slice(0));\n" +
    "  if (startIdx >= endIdx) {\n" +
    "    return;\n" +
    "  }\n" +
    "\n" +
    "  /* Set new pivot point and left/right points */\n" +
    "\n" +
    "  let pivot = startIdx, left = startIdx + 1, right = endIdx;\n" +
    "  animations.push([pivot, 0, \"pivot\"]);\n" +
    "\n" +
    "  /* Once the right point is less than the left, the while loop is broken */\n" +
    "\n" +
    "  while (right >= left) {\n" +
    "    if (auxiliaryArray[right] < auxiliaryArray[pivot] && auxiliaryArray[left] > auxiliaryArray[pivot]) {\n" +
    "      animations.push(auxiliaryArray.slice(0));\n" +
    "      animations.push([left, right, \"swap\"]);\n" +
    "      let temp = auxiliaryArray[right];\n" +
    "      auxiliaryArray[right] = auxiliaryArray[left];\n" +
    "      auxiliaryArray[left] = temp;\n" +
    "    }\n" +
    "\n" +
    "    if (auxiliaryArray[right] >= auxiliaryArray[pivot]) right--;\n" +
    "\n" +
    "    if (auxiliaryArray[left] <= auxiliaryArray[pivot]) left++;\n" +
    "\n" +
    "    if (right >= left) animations.push([left, right, \"left right\"]);\n" +
    "  }\n" +
    "\n" +
    "  /* If pivot does not equal the right point it is updated */\n" +
    "\n" +
    "  if (pivot !== right) {\n" +
    "    animations.push(auxiliaryArray.slice(0));\n" +
    "    animations.push([pivot, right, \"pivot, right\"]);\n" +
    "    let temp = auxiliaryArray[right];\n" +
    "    auxiliaryArray[right] = auxiliaryArray[pivot];\n" +
    "    auxiliaryArray[pivot] = temp;\n" +
    "  }\n" +
    "  quickSort(auxiliaryArray, startIdx, right - 1, animations);\n" +
    "  quickSort(auxiliaryArray, right + 1, endIdx, animations);\n" +
    "}"} ,{

  "algorithm" : "HeapSort",
  "worstPerformance" : "O(n log n). ",
  "bestPerformance" : "O(n log n) Distinct Keys, O(n) Equal Keys. ",
  "averagePerformance" : "O(n log n). ",
  "worstSpaceComplex" : "O(n) Total, O(1) Auxiliary.",
  "code" : "export function getHeapSortAnimations(array) {\n" +
    "  let auxiliaryArray = array.slice(0), animations = [];\n" +
    "  buildMaxHeap(auxiliaryArray, animations);\n" +
    "  let end = auxiliaryArray.length - 1;\n" +
    "\n" +
    "  /* While loop used tp extract am element from the heap */\n" +
    "\n" +
    "  while (end > 0) {\n" +
    "    animations.push([0, end, \"0, end\"]);\n" +
    "    let temp = auxiliaryArray[end];\n" +
    "    auxiliaryArray[end] = auxiliaryArray[0];\n" +
    "    auxiliaryArray[0] = temp;\n" +
    "    animations.push(auxiliaryArray.slice(0));\n" +
    "\n" +
    "    /* Call max heapify on the reduced heap */\n" +
    "\n" +
    "    siftDown(auxiliaryArray, 0, end, animations);\n" +
    "    end--;\n" +
    "  }\n" +
    "  return animations;\n" +
    "}\n" +
    "\n" +
    "/* Creates several sifts depending on how many times the array can divided by 2 */\n" +
    "\n" +
    "function buildMaxHeap(auxiliaryArray, animations) {\n" +
    "  let currentIndex = Math.floor(auxiliaryArray.length / 2);\n" +
    "  while (currentIndex >= 0) {\n" +
    "    siftDown(auxiliaryArray, currentIndex, auxiliaryArray.length, animations);\n" +
    "    currentIndex--;\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "/* Function that pushes the controlled value down the array swapping it if a larger one is found */\n" +
    "\n" +
    "function siftDown(auxiliaryArray, start, end, animations) {\n" +
    "  animations.push(auxiliaryArray.slice(0));\n" +
    "  if (start >= Math.floor(end / 2)) {\n" +
    "    return;\n" +
    "  }\n" +
    "  let left = start * 2 + 1,\n" +
    "    right = start * 2 + 2 < end ? start * 2 + 2 : null,\n" +
    "    swap;\n" +
    "  if (right) {\n" +
    "    swap = auxiliaryArray[left] > auxiliaryArray[right] ? left : right;\n" +
    "  } else {\n" +
    "    swap = left;\n" +
    "  }\n" +
    "\n" +
    "  /* If a value that is higher is found it is swapped and used to when sifting down the array */\n" +
    "\n" +
    "  if (auxiliaryArray[start] < auxiliaryArray[swap]) {\n" +
    "    let temp = auxiliaryArray[swap];\n" +
    "    auxiliaryArray[swap] = auxiliaryArray[start];\n" +
    "    auxiliaryArray[start] = temp;\n" +
    "    animations.push([start, swap, \"swap\"]);\n" +
    "    animations.push(auxiliaryArray.slice(0));\n" +
    "\n" +
    "    /* Recursively heapify the affected sub-tree arrays */\n" +
    "\n" +
    "    siftDown(auxiliaryArray, swap, end, animations);\n" +
    "  }\n" +
    "}"}, {

  "algorithm" : "BubbleSort",
  "worstPerformance" : "O(n2) Swaps, O(n2) Comparisons. ",
  "bestPerformance" : "O(1) Swaps, O(n) Comparisons. ",
  "averagePerformance" : "O(n2) Swaps, O(n2) Comparisons. ",
  "worstSpaceComplex" : "O(n) Total, O(1) Auxiliary.",
  "code" : "export function getBubbleSortAnimations(array) {\n" +
    "  let auxiliaryArray = array.slice(0), animations = [], sorted = false, round = 0;\n" +
    "\n" +
    "  /* While loop until all values are sorted  */\n" +
    "\n" +
    "  while (!sorted) {\n" +
    "    sorted = true;\n" +
    "    for (let i = 0; i < auxiliaryArray.length - 1 - round; i++) {\n" +
    "\n" +
    "      /* If the next value is higher the index values are swapped and the highest is now used */\n" +
    "\n" +
    "      if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {\n" +
    "        animations.push([i, i + 1, \"swap\"]);\n" +
    "        let temp = auxiliaryArray[i];\n" +
    "        auxiliaryArray[i] = auxiliaryArray[i + 1];\n" +
    "        auxiliaryArray[i + 1] = temp;\n" +
    "        sorted = false;\n" +
    "        animations.push(auxiliaryArray.slice(0));\n" +
    "      }\n" +
    "    }\n" +
    "\n" +
    "    /* Once the for loop ends, round is increased stopping the for loop one index earlier each time */\n" +
    "\n" +
    "    round++;\n" +
    "  }\n" +
    "  return animations;\n" +
    "}"}, {

  "algorithm" : "CocktailSort",
  "worstPerformance" : "O(n2) ",
  "bestPerformance" : "O(n) ",
  "averagePerformance" : "O(n2) ",
  "worstSpaceComplex" : "O(1)",
  "code" : "export function getCocktailSortAnimations(array){\n" +
    "  let auxiliaryArray = array.slice(0), animations = [];\n" +
    "  let start = 0, end = auxiliaryArray.length;\n" +
    "  let sorted = true;\n" +
    "\n" +
    "  /* While loop to keep looping until nothing is swapped implying it is fully sorted */\n" +
    "\n" +
    "  while(sorted) {\n" +
    "    sorted = false;\n" +
    "\n" +
    "    /* For loop to pick up the largest value as it bounces back to the end */\n" +
    "\n" +
    "    for (let i = start; i < end - 1; i++) {\n" +
    "      if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {\n" +
    "        animations.push([i, i + 1, \"swap\"])\n" +
    "        let temp = auxiliaryArray[i];\n" +
    "        auxiliaryArray[i] = auxiliaryArray[i + 1];\n" +
    "        auxiliaryArray[i + 1] = temp;\n" +
    "        sorted = true;\n" +
    "        animations.push(auxiliaryArray.slice(0));\n" +
    "      }\n" +
    "    }\n" +
    "\n" +
    "    /* If nothing is swapped sorted will be false and thus the loop is broken */\n" +
    "\n" +
    "    if (!sorted)\n" +
    "      break;\n" +
    "\n" +
    "    sorted = false;\n" +
    "\n" +
    "    /* Decrement the end value by one as the end value will be the highest */\n" +
    "\n" +
    "    end--;\n" +
    "\n" +
    "    /* For loop to pick up the smallest value as it bounces back to the start */\n" +
    "\n" +
    "    for (let i = end - 1; i >= start; i--) {\n" +
    "      if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {\n" +
    "        animations.push([i, i + 1, \"swap\"])\n" +
    "        let temp = auxiliaryArray[i];\n" +
    "        auxiliaryArray[i] = auxiliaryArray[i + 1];\n" +
    "        auxiliaryArray[i + 1] = temp;\n" +
    "        sorted = true;\n" +
    "        animations.push(auxiliaryArray.slice(0));\n" +
    "      }\n" +
    "    }\n" +
    "\n" +
    "    /* Increment the start value by one as the start value will be the smallest */\n" +
    "\n" +
    "    start++;\n" +
    "  }\n" +
    "  return animations;\n" +
    "}"}, {

  "algorithm" : "InsertionSort",
  "worstPerformance" : "O(n2) Swaps & Comparisons. ",
  "bestPerformance" : "O(1) Swaps, O(n) Comparisons. ",
  "averagePerformance" : "O(n2) Swaps & Comparisons. ",
  "worstSpaceComplex" : "O(n) Total, O(1) Auxiliary.",
  "code" : "export function getInsertionSortAnimations(array) {\n" +
    "  const auxiliaryArray = array.slice(), animations = [];\n" +
    "  const end = auxiliaryArray.length;\n" +
    "\n" +
    "  for(let i = 1; i <= end; i++) {\n" +
    "    const key = auxiliaryArray[i];\n" +
    "    let j = i - 1;\n" +
    "\n" +
    "    while(j >= 0 && auxiliaryArray[j] >= key) {\n" +
    "      auxiliaryArray[j + 1] = auxiliaryArray[j];\n" +
    "      animations.push(auxiliaryArray.slice(0));\n" +
    "      animations.push([j + 1, j, \"swap\"]);\n" +
    "      j = j - 1;\n" +
    "    }\n" +
    "    auxiliaryArray[j + 1] = key;\n" +
    "  }\n" +
    "  return animations;\n" +
    "}"}, {
}];