
/* Exported variable that stores in JSON format information on each algorithms space complexity */

export const data = [{
  "algorithm" : "MergeSort",
  "worstPerformance" : "O(n log n). ",
  "bestPerformance" : "O(n log n) Typical,  O(n) Natural Variant. ",
  "averagePerformance" : "O(n log n). ",
  "worstSpaceComplex" : "O(n) Total with O(n), O(1) Auxiliary with linked lists.",
  "code" : ""}, {

  "algorithm" : "QuickSort",
  "worstPerformance" : "O(n2). ",
  "bestPerformance" : "O(n log n) Simple Partition, O(n) Three-Way Partition & Equal Keys. ",
  "averagePerformance" : "O(n log n). ",
  "worstSpaceComplex" : "O(n) Auxiliary (Naive), O(log n) Auxiliary (Hoare 1962).",
  "code" : ""} ,{

  "algorithm" : "HeapSort",
  "worstPerformance" : "O(n log n). ",
  "bestPerformance" : "O(n log n) Distinct Keys, O(n) Equal Keys. ",
  "averagePerformance" : "O(n log n). ",
  "worstSpaceComplex" : "O(n) Total, O(1) Auxiliary.",
  "code" : ""}, {

  "algorithm" : "BubbleSort",
  "worstPerformance" : "O(n2) Swaps, O(n2) Comparisons. ",
  "bestPerformance" : "O(1) Swaps, O(n) Comparisons. ",
  "averagePerformance" : "O(n2) Swaps, O(n2) Comparisons. ",
  "worstSpaceComplex" : "O(n) Total, O(1) Auxiliary.",
  "code" : ""}, {

  "algorithm" : "CocktailSort",
  "worstPerformance" : "O(n2) ",
  "bestPerformance" : "O(n) ",
  "averagePerformance" : "O(n2) ",
  "worstSpaceComplex" : "O(1)",
  "code" : ""}, {

  "algorithm" : "InsertionSort",
  "worstPerformance" : "O(n2) Swaps & Comparisons. ",
  "bestPerformance" : "O(1) Swaps, O(n) Comparisons. ",
  "averagePerformance" : "O(n2) Swaps & Comparisons. ",
  "worstSpaceComplex" : "O(n) Total, O(1) Auxiliary.",
  "code" : "export function getInsertionSortAnimations(array) {<br/>" +
    "  const auxiliaryArray = array.slice(), animations = [ ];<br/>" +
    "  const end = auxiliaryArray.length;<br/>" +
    "<br/>" +
    "  for(let i = 1; i <= end; i++) {<br/>" +
    "    const key = auxiliaryArray[i];<br/>" +
    "    let j = i - 1;\n" +
    "<br/>" +
    "    while(j >= 0 && auxiliaryArray[j] >= key) {<br/>" +
    "      auxiliaryArray[j + 1] = auxiliaryArray[j];<br/>" +
    "      animations.push(auxiliaryArray.slice(0));<br/>" +
    "      animations.push([j + 1, j, \"swap\"]);<br/>" +
    "      j = j - 1;<br/>" +
    "}<br/>" +
    "    auxiliaryArray[j + 1] = key;<br/>" +
    "  }<br/>" +
    "  return animations;<br/>" +
    "}"}, {
}];