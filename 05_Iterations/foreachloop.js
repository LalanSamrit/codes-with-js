const coding = ["js", "java", "cpp", "ruby", "python"]

// coding.forEach(  function (val) {
//     console.log(val);  
// })


// coding.forEach(  (item) => {
//     console.log(item);
// })


// function print(item) {
//     console.log(item);
// }
// coding.forEach(print)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

/// array
const myCoding = [

    /// Object
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "cpp",
        langFileName: "c++"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach ( (item) => {
    console.log(item.langName);
    console.log(item.langFileName);
})