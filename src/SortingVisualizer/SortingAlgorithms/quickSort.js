
export function getQuickSortAnimations(array) {
    let auxiliaryArray = array.slice(0), animations = [];
    quickSortHelper(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
    return animations;
    }

    function quickSortHelper(auxiliaryArray, startIdx, endIdx, animations) {
        if (startIdx >= endIdx) {
            animations.push([0, startIdx, "start = end"]);
            return;
        }
        let pivot = startIdx, left = startIdx + 1, right = endIdx;
        animations.push([pivot, 0, "pivot"]);
        animations.push([left, right, "left, right"]);
        while (right >= left) {
            if (auxiliaryArray[right] < auxiliaryArray[pivot] && auxiliaryArray[left] > auxiliaryArray[pivot]) {
                animations.push([left, right, "swap"]);
                let temp = auxiliaryArray[right];
                auxiliaryArray[right] = auxiliaryArray[left];
                auxiliaryArray[left] = temp;
                animations.push(auxiliaryArray.slice(0));
            }
            if (auxiliaryArray[right] >= auxiliaryArray[pivot]) {
                right--;
            }
            if (auxiliaryArray[left] <= auxiliaryArray[pivot]) {
                left++;
            }
            if (right >= left) animations.push([left, right, "left right"]);
        }
        if (pivot !== right) {
            let temp = auxiliaryArray[right];
            auxiliaryArray[right] = auxiliaryArray[pivot];
            auxiliaryArray[pivot] = temp;
            animations.push([pivot, right, "pivot, right"]);
            animations.push([0, right, "right"]);
        }
        quickSortHelper(auxiliaryArray, startIdx, right - 1, animations);
        quickSortHelper(auxiliaryArray, right + 1, endIdx, animations);

    }