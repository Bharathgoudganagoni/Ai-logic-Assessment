function Area(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;

        if (area > max) {
            max = area;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(Area(height));
