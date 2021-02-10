
export function getQuickSortAnimations(stateArray) {
    const array = stateArray.slice(0), animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
    }

    function quickSortHelper(array, startIdx, endIdx, animations) {
        if (startIdx >= endIdx) {
            animations.push([true, startIdx]);
            return;
        }
        let pivot = startIdx, left = startIdx + 1, right = endIdx;
        animations.push(pivot);
        animations.push([left, right]);
        while (right >= left) {
            if (array[right] < array[pivot] && array[left] > array[pivot]) {
                animations.push([left, right, true]);
                let temp = array[right];
                array[right] = array[left];
                array[left] = temp;
                animations.push(array.slice(0));
                animations.push([]);
            }
            if (array[right] >= array[pivot]) {
                right--;
            }
            if (array[left] <= array[pivot]) {
                left++;
            }
            if (right >= left) animations.push(left, right);
        }
        animations.push([pivot, right]);
        if (pivot !== right) {
            let temp = array[right];
            array[right] = array[pivot];
            array[pivot] = temp;
            animations.push([pivot, right, true]);
            animations.push(array.slice(0));
            animations.push([]);
            animations.push([true, right]);
        }
        quickSortHelper(array, startIdx, right - 1, animations);
        quickSortHelper(array, right + 1, endIdx, animations);

    }