
/* Function for sorting with bubble sort animation */

export function getBubbleSortAnimations(array) {
  let auxiliaryArray = array.slice(0), animations = [], sorted = false, round = 0;

  /* While loop until all values are sorted  */

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < auxiliaryArray.length - 1 - round; i++) {

      /* If the next value is higher the index values are swapped and the highest is now used */

      if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {
        animations.push([i, i + 1, "swap"]);
        let temp = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[i + 1];
        auxiliaryArray[i + 1] = temp;
        sorted = false;
        animations.push(auxiliaryArray.slice(0));
      }
    }

    /* Once the for loop ends, round is increased stopping the for loop one index earlier each time */

    round++;
  }
  return animations;
}