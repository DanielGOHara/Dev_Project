import { getMergeSortAnimations } from './mergeSort';

/* Function to redirect the program to the desired algorithm file and returns the animated array */

export function getSortedAlgo(selectedAlgorithm, array) {
    switch(selectedAlgorithm) {
        case 'MergeSort':
            console.log("MergeSort");
            return getMergeSortAnimations(array);
        case 'QuickSort':
            console.log("QuickSort");
            break;
        case 'HeapSort':
            console.log("HeapSort");
            break;
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
