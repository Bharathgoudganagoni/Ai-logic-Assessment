function maximumSwap(num) {
    const digits = String(num).split('');
    const last = new Array(10).fill(-1);

    for (let i = 0; i < digits.length; i++) {
        last[digits[i]] = i;
    }

    for (let i = 0; i < digits.length; i++) {
        for (let d = 9; d > digits[i]; d--) {
            if (last[d] > i) {
                const temp = digits[i];
                digits[i] = digits[last[d]];
                digits[last[d]] = temp;

                return Number(digits.join(''));
            }
        }
    }
    return num;
}

const num = 2736;
console.log(maximumSwap(num));
