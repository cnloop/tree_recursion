let data = [{
    a: 123,
    arr: [{ b: true }, { b: false }]
},
{
    a: 234,
    arr: [{ b: true }, { b: false }]
}]
let newArr = [];
data.forEach((value, index) => {
    newArr[index] = value;
    newArr[index].arr = value.arr.filter(
        item => item.b === true)
})
console.log(newArr)
