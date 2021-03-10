import { getMergeSortAnimations } from './mergeSort';
import { getQuickSortAnimations } from "./quickSort";
import { getHeapSortAnimations } from "./heapSort";
import {getBubbleSortAnimations} from "./bubbleSort";

/* Function to redirect the program to the desired algorithm file and returns the animated array */

export function getSortedAlgo(selectedAlgorithm, array) {
    switch(selectedAlgorithm) {
        case 'MergeSort':
            console.log("MergeSort");
            return getMergeSortAnimations(array);
        case 'QuickSort':
            console.log("QuickSort");
            return getQuickSortAnimations(array);
        case 'HeapSort':
            console.log("HeapSort");
            return getHeapSortAnimations(array);
        case 'BubbleSort':
            console.log("BubbleSort");
            return getBubbleSortAnimations(array);
        default:
            console.log("Default");
    }
}
