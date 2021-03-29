
export function getInsertionSortAnimations(array) {
  const auxiliaryArray = array.slice(), animations = [];
  const end = auxiliaryArray.length;

  for(let i = 1; i <= end; i++) {
    const key = auxiliaryArray[i];
    let j = i - 1;

    while(j >= 0 && auxiliaryArray[j] > key) {
      auxiliaryArray[j + 1] = auxiliaryArray[j];
      animations.push(auxiliaryArray.slice(0));
      animations.push([j + 1, j, "swap"]);
      j = j - 1;
      animations.push([j - 1, j, "swap"]);
    }
    auxiliaryArray[j + 1] = key;
  }
  return animations;
}