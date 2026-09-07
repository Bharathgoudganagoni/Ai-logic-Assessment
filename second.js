function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
        
    }

    return candidate;
}

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
