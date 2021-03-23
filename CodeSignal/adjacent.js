function adjacentElementsProduct(arr) {
    return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}

let array = [-23, 4, -3, 8, -12]
console.log(...array);
console.log(...array.slice(1));
console.log(Math.max(...array.map((x,i) => [x*array[i]])));


console.log(
    adjacentElementsProduct(array)
);