import { getMergeSortAnimations } from './mergeSort';
import { getQuickSortAnimations } from "./quickSort";
import { getHeapSortAnimations } from "./heapSort";
import { getBubbleSortAnimations } from "./bubbleSort";
import { getCocktailSortAnimations } from "./cocktailSort";
import { getInsertionSortAnimations } from "./insertionSort";

/* Function to redirect the program to the desired algorithm file and returns the animated array */

export function getSortedAlgo(selectedAlgorithm, array) {
  switch(selectedAlgorithm) {
    case 'MergeSort':
      return getMergeSortAnimations(array);
    case 'QuickSort':
      return getQuickSortAnimations(array);
    case 'HeapSort':
      return getHeapSortAnimations(array);
    case 'BubbleSort':
      return getBubbleSortAnimations(array);
    case 'CocktailSort':
      return getCocktailSortAnimations(array);
    case 'InsertionSort':
      return getInsertionSortAnimations(array);
    default:
      console.log("Default");
  }
}
