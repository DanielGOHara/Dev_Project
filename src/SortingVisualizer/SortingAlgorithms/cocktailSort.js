
export function getCocktailSortAnimations(array){
  let auxiliaryArray = array.slice(0), animations = [];
  let start = 0, end = auxiliaryArray.length;
  let sorted = true;

  /* While loop to keep looping until nothing is swapped implying it is fully sorted */

  while(sorted === true) {
    sorted = false;

    /* For loop to pick up the largest value as it bounces back to the end */

    for (let i = start; i < end - 1; i++) {
      if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {
        animations.push([i, i + 1, "swap"])
        let temp = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[i + 1];
        auxiliaryArray[i + 1] = temp;
        sorted = true;
        animations.push(auxiliaryArray.slice(0));
      }
    }

    /* If nothing is swapped sorted will be false and thus the loop is broken */

    if (sorted === false)
      break;

    sorted = false;

    /* Decrement the end value by one as the end value will be the highest */

    end--;

    /* For loop to pick up the smallest value as it bounces back to the start */

    for (let i = end - 1; i >= start; i--) {
      if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {
        animations.push([i, i + 1, "swap"])
        let temp = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[i + 1];
        auxiliaryArray[i + 1] = temp;
        sorted = true;
        animations.push(auxiliaryArray.slice(0));
      }
    }

    /* Increment the start value by one as the start value will be the smallest */

    start++;
  }
  return animations;
}
