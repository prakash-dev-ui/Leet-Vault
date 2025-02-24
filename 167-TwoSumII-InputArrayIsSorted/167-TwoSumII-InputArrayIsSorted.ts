function twoSum(numbers: number[], target: number): number[] {
    let left: number = 0;
    let right: number = numbers.length - 1;
    while (left < right) {
        const targetSum : number = numbers[left] + numbers[right];
        if (targetSum === target) {
            return [left+1, right+1]
        }
        else if (targetSum < target) left++
        else right--
    } 
};