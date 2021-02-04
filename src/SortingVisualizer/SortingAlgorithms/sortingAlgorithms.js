import mergeSort from './mergeSort';

export default function sortingAlgorithms(selectedAlgorithm, array) {
    let sortedArray = [];
    switch(selectedAlgorithm) {
        case 'MergeSort':
            sortedArray = mergeSort(array);
            console.log("MergeSort");
            break;
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
    return array;
}
