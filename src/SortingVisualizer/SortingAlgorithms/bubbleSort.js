
export function getBubbleSortAnimations(stateArray, dispatch, speed) {
  let auxiliaryArray = stateArray.slice(0),
    animations = [],
    sorted = false,
    round = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < auxiliaryArray.length - 1 - round; i++) {
      animations.push([i, i + 1]);
      if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {
        animations.push([i, i + 1, true]);
        let temp = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[i + 1];
        auxiliaryArray[i + 1] = temp;
        sorted = false;
        animations.push(auxiliaryArray.slice(0));
        animations.push([]);
      }
    }
    animations.push([true, auxiliaryArray.length - 1 - round]);
    round++;
  }
  return animations;
}