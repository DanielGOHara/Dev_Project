import { getMergeSortAnimations } from './mergeSort';
import { getQuickSortAnimations } from "./quickSort";
import { getHeapSortAnimations } from "./heapSort";

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
        case 'TreeSort':
            console.log("TreeSort");
            break;
        case 'BlockSort':
            console.log("BlockSort");
            break;
        case 'TimSort':
            console.log("TimSort");
            break;
        case 'ShellSort':
            console.log("ShellSort");
            break;
        case 'QuadSort':
            console.log("QuadSort");
            break;
        case 'CubeSort':
            console.log("CubeSort");
            break;
        default:
            console.log("Default");
    }
}
